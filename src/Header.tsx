import React from 'react';
import styles from './Header.module.css';
import { FaFlagCheckered, FaQuestionCircle, FaPlay,
  FaFileExport, FaSave, FaCloudUploadAlt, FaRobot } from "react-icons/fa";
import { BiNetworkChart } from "react-icons/bi";
import { NodeTypes } from './App';

type CreateNode = (type: NodeTypes) => void;

interface HeaderProps {
  title: string;
  setTitle: Function;
  createNode: CreateNode;
  onExport: Function;
  onSave: Function;
  onLoadSave: Function;
  onTestForm: Function;
}

const Header: React.FC<HeaderProps> = (props: HeaderProps) => {
  return (
    <div className={styles.headerPanel}>
      <div className={styles.logo}>
        <BiNetworkChart className={styles.logoIcon}/>
        <input
          onChange={e => {
          props.setTitle(e.target.value);
        }}
        value={props.title} className={styles.title}/>
      </div>
      <div className={styles.itemsContainer}>
        <div className={styles.headerItem}
          onClick={() => props.createNode(NodeTypes.Start)}>
          <div className={styles.headerItemLabel}>Start Node</div>
          <FaPlay/>
        </div>
        <div className={styles.headerItem}
          onClick={() => props.createNode(NodeTypes.Question)}>
          <div className={styles.headerItemLabel}>Question Node</div>
          <FaQuestionCircle/>
        </div>
        <div className={styles.headerItem}
          onClick={() => props.createNode(NodeTypes.End)}>
          <div className={styles.headerItemLabel}>End Node</div>
          <FaFlagCheckered/>
        </div>
        <div className={styles.headerItem}
          onClick={() => props.onExport()}>
          <div className={styles.headerItemLabel}>Export</div>
          <FaFileExport/>
        </div>
        <div className={styles.headerItem}
          onClick={() => props.onSave()}>
          <div className={styles.headerItemLabel}>Save</div>
          <FaSave/>
        </div>
        <div className={styles.headerItem}
          onClick={() => props.onLoadSave()}>
          <div className={styles.headerItemLabel}>Upload Save</div>
          <FaCloudUploadAlt/>
        </div>
        <div className={styles.headerItem}
          onClick={() => props.onTestForm()}>
          <div className={styles.headerItemLabel}>Test Form</div>
          <FaRobot/>
        </div>
      </div>
    </div>
  )
}

export default Header;