import { useContext } from "react";
import { Handle, Position } from "react-flow-renderer";
import { SelectedNodeIdContext } from "./App";
import styles from './Questionnode.module.css';
export interface Answer {
  /**
   * The text answer
   */
  text: string;
  /**
   * The id that this answer will go to
   */
  nextId: string;
}

export interface QuestionNodeProps {
  id: string;
  data: {
    question: string;
    answers: Array<Answer>;
  }
}

const Questionnode: React.FC<QuestionNodeProps> = (props: QuestionNodeProps) => {
  const selectedNodeId = useContext(SelectedNodeIdContext);
  let wrapperClassName = `${styles.questionNodeWrapper}`
  if (selectedNodeId === props.id) {
    wrapperClassName = `${styles.questionNodeWrapper} ${styles.selected}`;
  }
  const makeAnswerHandles = () => props.data.answers.map((data, index) => (
      <div key={index} className={styles.answerWrapper}>
        <div className={styles.answerText}
          dangerouslySetInnerHTML={{ __html: data.text }}
        ></div>
        <Handle
          id = {`${index}`}
          className='handleRight'
          style={{ position: 'absolute',
          }}
          type="source" position={Position.Right}/>
      </div>
    ))
  
  return (
    <div className={wrapperClassName}>
      <div className={styles.questionWrapper}>
        <Handle
          className='handleLeft'
          style={{ position: 'absolute' }}
          type="target"
          position={Position.Left}
        />
        <div className={styles.questionNodeText}
          dangerouslySetInnerHTML={{ __html: props.data.question }}
        ></div>
      </div>
      <div className={styles.answerList}>
        {makeAnswerHandles()}
      </div>
    </div>
  )
}

export default Questionnode;