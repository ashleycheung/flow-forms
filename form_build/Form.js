import styles from './Form.module.css';
import React, { useState } from "react"; // interface QuestionProps {
//   question: string;
//   answers: Array<any>;
//   /**
//    * The index of the answer selected
//    */
//   selectedAns: number | null;
//   setSelectedAns: Function;
//   style: any | null;
// }

const Question = props => {
  const renderAnswers = () => props.answers.map((a, index) => /*#__PURE__*/React.createElement(Answer, {
    key: index,
    text: a.text,
    index: index,
    selectedAns: props.selectedAns,
    setSelectedAns: props.setSelectedAns,
    style: props.answerStyles,
    selectedStyle: props.selectedStyles
  }));

  return /*#__PURE__*/React.createElement("div", {
    className: styles.questionWrapper
  }, /*#__PURE__*/React.createElement("div", {
    className: styles.questionText,
    style: {
      color: props.style.color,
      fontSize: `${props.style.fontSize}px`
    },
    dangerouslySetInnerHTML: {
      __html: props.question
    }
  }), renderAnswers());
}; // interface AnswerProps {
//   text: string;
//   index: number;
//   selectedAns: number | null;
//   setSelectedAns: Function;
// }


const Answer = props => {
  const onClick = () => {
    if (props.selectedAns === props.index) {
      props.setSelectedAns(null);
    } else {
      props.setSelectedAns(props.index);
    }
  };

  if (props.selectedAns === props.index) {
    return /*#__PURE__*/React.createElement("div", {
      onClick: onClick,
      className: `${styles.answer} ${styles.selected}`,
      style: {
        border: `solid 2px ${props.selectedStyle?.color}`,
        color: props.selectedStyle?.color,
        backgroundColor: props.selectedStyle?.backgroundColor
      },
      dangerouslySetInnerHTML: {
        __html: props.text
      }
    });
  }

  return /*#__PURE__*/React.createElement("div", {
    style: {
      border: `solid 2px ${props.style?.color}`,
      fontSize: `${props.style?.fontSize}px`,
      color: props.style?.color,
      backgroundColor: props.style?.backgroundColor
    },
    onClick: onClick,
    className: styles.answer
  }, props.text);
};
/*
interface FormProps {
  formData: {
    startId: string;
    nodeMap: {
      [key: string]: any
    },
    styles: {
      form?: {
        backgroundColor?: string
      }
      question?: {
        color?: string,
        fontSize?: number,
      },
      answer?: {
        fontSize?: number,
        color?: string,
        backgroundColor?: string,
      },
      selected?: {
        color?: string;
        backgroundColor?: string
      },
      result?: {
        color?: string,
        backgroundColor?: string,
        fontSize?: number
      },
    }
  };
}
*/


const Form = props => {
  // This is a stack remembering the id of the questions to show
  const [questionStack, setQuestionStack] = useState([]); // Maps the question id to the answer index chosen

  const [answerMap, setAnswerMap] = useState({});

  const addToStack = id => {
    setQuestionStack(questionStack.concat([id]));
  };

  if (!(props.formData.startId in props.formData.nodeMap)) {
    return /*#__PURE__*/React.createElement("div", {
      className: styles.formWrapper,
      style: props.formData?.styles?.form
    }, "Your form must have a valid start node");
  } // Add the initial question if empty


  if (questionStack.length === 0) {
    addToStack(props.formData.startId);
  }

  const setSelectedAns = (qid, aid) => {
    // Update question map
    const newAMap = Object.assign({}, answerMap);
    newAMap[qid] = aid; // Update stack

    const newStack = [];
    let hasReached = false; // Loop to te question that is changed

    for (const currQid of questionStack) {
      if (hasReached) {
        newAMap[currQid] = null;
      } else {
        newStack.push(currQid);
      }

      if (qid === currQid) {
        hasReached = true;
      }
    }

    if (aid !== null) {
      // Add the next node on
      newStack.push(props.formData.nodeMap[qid].answers[aid].nextId);
    }

    setQuestionStack(newStack);
    setAnswerMap(newAMap);
  };

  const renderQuestions = () => questionStack.map((id, index) => {
    const qData = props.formData.nodeMap[id];

    if (qData == null) {
      return null;
    } else if (qData.type === 'question') {
      return /*#__PURE__*/React.createElement(Question, {
        key: index,
        question: `${index + 1}) ${qData.question}`,
        answers: qData.answers,
        selectedAns: answerMap[id] ?? null,
        setSelectedAns: i => setSelectedAns(id, i),
        style: props.formData?.styles?.question ?? {},
        answerStyles: props.formData?.styles?.answer,
        selectedStyles: props.formData?.styles?.selected
      });
    } else if (qData.type === 'end') {
      return /*#__PURE__*/React.createElement("div", {
        key: index,
        className: styles.endWrapper
      }, /*#__PURE__*/React.createElement("div", {
        className: styles.endTitle
      }, "Results"), /*#__PURE__*/React.createElement("div", {
        style: {
          fontSize: `${props.formData?.styles?.result?.fontSize}px`,
          color: props.formData?.styles?.result?.color,
          backgroundColor: props.formData?.styles.result?.backgroundColor
        },
        className: styles.endResult,
        dangerouslySetInnerHTML: {
          __html: qData.result
        }
      }));
    }

    return null;
  });

  return /*#__PURE__*/React.createElement("div", {
    className: styles.formWrapper,
    style: props.formData?.styles?.form
  }, renderQuestions());
};

export default Form;