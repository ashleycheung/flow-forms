import { useContext } from "react";
import { Handle, Position } from "react-flow-renderer";
import { SelectedNodeIdContext } from "./App";
import styles from './Endnode.module.css';

export interface EndNodeProps {
  id: string;
  data: {
    result: string;
  }
}

const Endnode: React.FC<EndNodeProps> = (props: EndNodeProps) => {
  const selectedNodeId = useContext(SelectedNodeIdContext);
  let wrapperClassName = `${styles.wrapper}`
  if (selectedNodeId === props.id) {
    wrapperClassName = `${styles.wrapper} ${styles.selected}`;
  }
  return (
    <div className={wrapperClassName}>
      <Handle
        style={{ position: 'absolute' }}
        type="target"
        position={Position.Left}
      />
      <div className={styles.resultText}>
        {props.data.result}
      </div>
    </div>
  )
}

export default Endnode;