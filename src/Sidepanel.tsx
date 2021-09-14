import { MdHighlightOff } from "react-icons/md";
import styles from './Sidepanel.module.css';

interface SidePanelProps {
  nodeData: any;
  setNodeData: Function;
  deleteNode: Function;
}

const Sidepanel: React.FC<SidePanelProps> = (props: SidePanelProps) => {
  const setQuestion = (question: string) => {
    const newNodeData = props.nodeData;
    newNodeData.data.question = question;
    props.setNodeData(newNodeData);
  }
  const setResultText = (text: string) => {
    const newNodeData = props.nodeData;
    newNodeData.data.result = text;
    props.setNodeData(newNodeData);
  }
  const setAnswerText = (text: string, index: number) => {
    const newNodeData = props.nodeData;
    newNodeData.data.answers[index].text = text;
    props.setNodeData(newNodeData);
  }
  const addAnswer = () => {
    const newNodeData = props.nodeData;
    newNodeData.data.answers.push({
      text: "My answer",
      nextId: null
    })
    props.setNodeData(newNodeData);
  }
  const removeAnswer = (i: number) => {
    const newNodeData = props.nodeData;
    newNodeData.data.answers.splice(i,1);
    props.setNodeData(newNodeData);
  }
  const renderAnswers = (answers: Array<any>) => answers.map((a, index) => (
    <div key={index} className={styles.answerWrapper}>
      <div className={styles.answerHeader}>
        <div className={styles.sidePanelLabel}>{`Answer ${index + 1}`}</div>
        <MdHighlightOff 
          onClick={() => removeAnswer(index)}
          className={styles.iconBtn}
        />
      </div>
      <textarea
        rows={7}
        className={styles.sidePanelTextInput}
        value={a.text}
        onChange={e => setAnswerText(e.target.value, index)}
      />
    </div>
  ))
  if (props.nodeData == null) {
    return (<div className={styles.sidePanel}>
      Click a node to edit it.
    </div>)
  } else if (props.nodeData.type === "question") {
    return (
    <div className={styles.sidePanel}>
      <div className={styles.sidePanelLabel}>Question</div>
      <textarea
        rows={7}
        className={styles.sidePanelTextInput}
        onChange={e => setQuestion(e.target.value)}
        value={props.nodeData.data.question}
      />
      { renderAnswers(props.nodeData.data.answers) }
      <button onClick={addAnswer} className={styles.panelBtn}>Add Answer</button>
      <button onClick={e => props.deleteNode()}
        className={styles.deleteBtn}>Delete Node</button>
    </div>)
  } else if (props.nodeData.type === "end") {
    return (
      <div className={styles.sidePanel}>
        <div className={styles.sidePanelLabel}>Result</div>
        <textarea
          rows={7}
          className={styles.sidePanelTextInput}
          onChange={e => setResultText(e.target.value)}
          value={props.nodeData.data.result}
        />
        <button onClick={e => props.deleteNode()}
          className={styles.deleteBtn}>Delete Node</button>
      </div>
    )
  } else if (props.nodeData.type === "input") {
    return (
      <div className={styles.sidePanel}>
        <div className={styles.sidePanelLabel}>Start node</div>
        <button onClick={e => props.deleteNode()}
          className={styles.deleteBtn}>Delete Node</button>
      </div>
    )
  }
  return (
    <div className={styles.sidePanel}>{JSON.stringify(props.nodeData, null, 1)}</div>
  )
}

export default Sidepanel;