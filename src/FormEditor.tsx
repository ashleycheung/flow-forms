import { useState } from 'react';
import styles from './FormEditor.module.css';

interface PanelProps {
  panelId: number;
  selectedId: number;
  setSelectedId: Function;
  children: any;
}

const Panel: React.FC<PanelProps> = (props: PanelProps) => {
  const onClick = () => {
    props.setSelectedId(props.panelId);
  }
  const className = props.panelId === props.selectedId 
    ? `${styles.sideBarItem} ${styles.selected}` 
    : styles.sideBarItem;
  return (
    <div onClick={onClick} className={className}>
      { props.children }
    </div>
  )
}

interface FormEditorProps {
  formStyles: {
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
  };
  setFormStyles: Function;
}

const FormEditor: React.FC<FormEditorProps> = (props: FormEditorProps) => {
  const [ selected, setSelected] = useState<number>(0);
  const setStyle = (key: string, data: any) => {
    const copyObj: any = Object.assign({}, props.formStyles);
    copyObj[key] = data;
    props.setFormStyles(copyObj);
  }
  const setForm = (prop: string, value: any) => {
    const formStyle: any = Object.assign({}, props.formStyles.form) ?? {};
    formStyle[prop] = value;
    setStyle('form', formStyle);
  }
  const setQuestion = (prop: string, value: any) => {
    const questionStyle: any = Object.assign({}, props.formStyles.question) ?? {};
    questionStyle[prop] = value;
    setStyle('question', questionStyle);
  }
  const setAnswer = (prop: string, value: any) => {
    const answerStyle: any = Object.assign({}, props.formStyles.answer) ?? {};
    answerStyle[prop] = value;
    setStyle('answer', answerStyle);
  }
  const setSelectedProp = (prop: string, value: any) => {
    const selectedStyle: any = Object.assign({}, props.formStyles.selected) ?? {};
    selectedStyle[prop] = value;
    setStyle('selected', selectedStyle);
  }
  const setResult = (prop: string, value: any) => {
    const resultStyle: any = Object.assign({}, props.formStyles.result) ?? {};
    resultStyle[prop] = value;
    setStyle('result', resultStyle);
  }
  const renderContent = () => {
    switch (selected) {
      case 0:
        return (
        <div>
          <div className={styles.heading}>Form</div>
          <div className={styles.property}>
            <div className={styles.subheading}>Background Color</div>
            <input 
              value={props.formStyles.form?.backgroundColor ?? '#ffffff'}
              onChange={e => setForm('backgroundColor', e.target.value)}
              type="color"/>
          </div>
        </div>)
      case 1:
        return (
        <div>
          <div className={styles.heading}>Question</div>
          <div className={styles.property}>
            <div className={styles.subheading}>Color</div>
            <input 
              value={props.formStyles.question?.color ?? '#000000'}
              onChange={e => {setQuestion('color', e.target.value)}}
              type="color"/>
          </div>
          <div className={styles.property}>
            <div className={styles.subheading}>Font Size</div>
            <input 
              value={props.formStyles.question?.fontSize ?? 20}
              onChange={e => {setQuestion('fontSize', e.target.value)}}
              type="number"/>
          </div>
          <div className={styles.heading}>Answer</div>
          <div className={styles.property}>
            <div className={styles.subheading}>Color</div>
            <input 
              value={props.formStyles.answer?.color ?? '#000000'}
              onChange={e => {setAnswer('color', e.target.value)}}
              type="color"/>
          </div>
          <div className={styles.property}>
            <div className={styles.subheading}>Background Color</div>
            <input 
              value={props.formStyles.answer?.backgroundColor ?? '#ffffff'}
              onChange={e => {setAnswer('backgroundColor', e.target.value)}}
              type="color"/>
          </div>
          <div className={styles.property}>
            <div className={styles.subheading}>Font Size</div>
            <input 
              value={props.formStyles.answer?.fontSize ?? 20}
              onChange={e => {setAnswer('fontSize', e.target.value)}}
              type="number"/>
          </div>
          <div className={styles.property}>
            <div className={styles.subheading}>Selected Color</div>
            <input 
              value={props.formStyles.selected?.color ?? '#ffffff'}
              onChange={e => {setSelectedProp('color', e.target.value)}}
              type="color"/>
          </div>
          <div className={styles.property}>
            <div className={styles.subheading}>Selected Background Color</div>
            <input 
              value={props.formStyles.selected?.color ?? '#E34552'}
              onChange={e => {setSelectedProp('backgroundColor', e.target.value)}}
              type="color"/>
          </div>
        </div>)
      case 2:
        return (
        <div>
          <div className={styles.heading}>Result</div>
          <div className={styles.property}>
            <div className={styles.subheading}>Color</div>
            <input 
              value={props.formStyles.result?.color ?? '#ffffff'}
              onChange={e => {setResult('color', e.target.value)}}
              type="color"/>
          </div>
          <div className={styles.property}>
            <div className={styles.subheading}>Background Color</div>
            <input 
              value={props.formStyles.result?.backgroundColor ?? '#1A192B'}
              onChange={e => {setResult('backgroundColor', e.target.value)}}
              type="color"/>
          </div>
          <div className={styles.property}>
            <div className={styles.subheading}>Font Size</div>
            <input 
              value={props.formStyles.result?.fontSize ?? 30}
              onChange={e => {setResult('fontSize', e.target.value)}}
              type="number"/>
          </div>
        </div>)
      default:
        throw new Error('Invalid panel id');
    }
  }
  return (
    <div className={styles.formEditor}>
      <div className={styles.sideBar}>
        <Panel panelId={0} selectedId={selected}
          setSelectedId={setSelected}
        >
          Form
        </Panel>
        <Panel panelId={1} selectedId={selected}
          setSelectedId={setSelected}
        >
          Question
        </Panel>
        <Panel panelId={2} selectedId={selected}
          setSelectedId={setSelected}
        >
          Result
        </Panel>
      </div>
      <div className={styles.main}>
        { renderContent() }
      </div>
    </div>
  )
}

export default FormEditor;
