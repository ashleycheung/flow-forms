import { FlowGraph } from "./helpers";
import styles from './Form.module.css'
import React, { useState } from "react";

interface QuestionProps {
  question: string;
  answers: Array<any>;
  /**
   * The index of the answer selected
   */
  selectedAns: number | null;
  setSelectedAns: Function;
}

const Question: React.FC<QuestionProps> = (props: QuestionProps) => {
  const renderAnswers = () => 
    props.answers.map((a: any, index: number) => (<Answer
      key={index}   
      text={a.text}
      index={index}
      selectedAns={props.selectedAns}
      setSelectedAns={props.setSelectedAns}
    />)
  )
  return  (
    <div className={styles.questionWrapper}>
      <div className={styles.questionText}>
        {props.question}
      </div>
      { renderAnswers() }
    </div>
  )
}

interface AnswerProps {
  text: string;
  index: number;
  selectedAns: number | null;
  setSelectedAns: Function;
}

const Answer: React.FC<AnswerProps> = (props: AnswerProps) => {
  const onClick = () => {
    if (props.selectedAns === props.index) {
      props.setSelectedAns(null)
    } else {
      props.setSelectedAns(props.index)
    }
  }
  if (props.selectedAns === props.index) {
    return (
      <div onClick={onClick} className={`${styles.answer} ${styles.selected}`}>
        {props.text}
      </div>
    )
  }
  return (
    <div onClick={onClick} className={styles.answer}>
      {props.text}
    </div>
  )
}

interface FormProps {
  formData: FlowGraph;
}

const Form: React.FC<FormProps> = (props: FormProps) => {
  // This is a stack remembering the id of the questions to show
  const [ questionStack, setQuestionStack ] = useState<Array<string>>([]);
  // Maps the question id to the answer index chosen
  const [ answerMap, setAnswerMap ] = useState<any>({});
  const addToStack = (id: string) => {
    setQuestionStack(questionStack.concat([id]));
  }
  if (!(props.formData.startId in props.formData.nodeMap)) {
    return (
      <div className={styles.formWrapper}>
        Your form must have a valid start node
      </div>
    )
  }
  // Add the initial question if empty
  if (questionStack.length === 0) {
    addToStack(props.formData.startId);
  }
  const setSelectedAns = (qid: string, aid: number) => {
    // Update question map
    const newAMap = Object.assign({}, answerMap);
    newAMap[qid] = aid;
    // Update stack
    const newStack = [];
    let hasReached = false;
    // Loop to te question that is changed
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
  }
  const renderQuestions = () => questionStack.map(
    (id: string, index: number) => {
      const qData = props.formData.nodeMap[id];
      if (qData == null) {
        return (null);
      } else if (qData.type === 'question') {
        return (
          <Question
            key={index}
            question={`${index + 1}) ${qData.question}`}
            answers={qData.answers}
            selectedAns={answerMap[id] ?? null}
            setSelectedAns={(i: number) => setSelectedAns(id, i)}
          />
        )
      } else if (qData.type === 'end') {
        return (
          <div key={index} className={styles.endWrapper}>
            <div className={styles.endTitle}>Results</div>
            <div className={styles.endResult}>{qData.result}</div>
          </div>
        )
      }
      return (null);
    }
  )
  
  return (
    <div className={styles.formWrapper}>
      { renderQuestions() }
    </div>
  )
}

export default Form