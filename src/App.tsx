import { useRef, useState } from 'react';
import ReactFlow, {addEdge, Background, BackgroundVariant, ControlButton, Controls, MiniMap, updateEdge} from 'react-flow-renderer';
import styles from './App.module.css';
import ButtonEdge from './ButtonEdge';
import Header from './Header';
import { download, fileToJSON, parseToGraph, Vector, vectorAdd } from './helpers';
import Questionnode from './Questionnode';
import Sidepanel from './Sidepanel';
import React from 'react';
import Endnode from './Endnode';
import Form from './Form';
import { MdRemoveCircle } from "react-icons/md";
import { FaFlagCheckered, FaQuestionCircle, FaPlay } from "react-icons/fa";

export enum NodeTypes {
  Start,
  Question,
  End
}

export const RemoveEdgeContext = React.createContext((id: string) => {});

export const SelectedNodeIdContext = React.createContext('');

function App() {
  const [ rfInstance, setRfInstance ] = useState(null);
  const [ title, setTitle ] = useState('My Calculator');
  const [ lastSelectedPos, setLastSelectedPos ] = useState({ x:300, y:300 })
  const [ showForm, setShowForm ] = useState(false);
  const fileInput = useRef(null);
  /**
   * The id of the node that is selected
   */
  const [ selectedNodeId, setSelectedNodeId ] = useState('');
  /**
   * Stores all the react flow node elements
   */
  const [ flowElements, setFlowElements ] = useState<Array<any>>([]);
  const getSelectedNodeData = () => {
    const target = flowElements.filter(o => o.id === selectedNodeId);
    if (target.length === 0) {
      return null;
    }
    return target[0];
  }
  const removeNode = (id: string) => {
    const removed = flowElements.filter(o => o.id !== id);
    // If none is removed do nothing
    if (removed.length === flowElements.length) {
      return;
    }
    setFlowElements(removed);
  }
  /**
   * Update the data for one specific node with the given id
   * @param id 
   * @param data 
   */
  const setNode = (id: string, data: any) => {
    const removed = flowElements.filter(o => o.id !== id);
    // If none is removed do nothing
    if (removed.length === flowElements.length) {
      return;
    }
    setFlowElements(removed.concat([data]));
  }
  /**
   * Used to create a node
   */
  const createNode = (type: NodeTypes) => {
    const createStartNode = () => {
      const element = {
        id: Date.now().toString(),
        type: 'input',
        data: { label: 'Start Node' },
        position: lastSelectedPos,
        sourcePosition: 'right',
        className: 'startNode',
      }
      setFlowElements(flowElements.concat([element]));
      setLastSelectedPos(vectorAdd(element.position as Vector, { x: 100, y: 100 }));
    }
    const createQuestionNode = () => {
      const element = {
        id: Date.now().toString(),
        type: 'question',
        data: {
          label: 'Question node',
          question: 'My question',
          answers: [
            {
              text: "My Answer",
            },
          ]
        },
        position: lastSelectedPos
      }
      setFlowElements(flowElements.concat([element]));
      setLastSelectedPos(vectorAdd(element.position as Vector, { x: 100, y: 100 }));
    }
    const createEndNode = () => {
      const element = {
        id: Date.now().toString(),
        type: 'end',
        data: { label: 'End Node', result: 'My Result' },
        position: lastSelectedPos
      }
      setFlowElements(flowElements.concat([element]));
      setLastSelectedPos(vectorAdd(element.position as Vector, { x: 100, y: 100 }));
    }
    switch(type) {
      case NodeTypes.Start:
        createStartNode();
        break;
      case NodeTypes.Question:
        createQuestionNode();
          break;
      case NodeTypes.End:
        createEndNode();
        break;
      default:
        throw new Error(`Invalid type of ${type}`);
    }
  }
  const onLoadSave = async () => {
    const domElem = fileInput.current as any;
    domElem?.click();
    domElem.onchange = async () => {
      const json = await fileToJSON(domElem.files[0]);
      setFlowElements((json as any).elements);
    }
  }
  const onExport = () => {
    console.log(parseToGraph(flowElements));
  }
  const onSave = async () => {
    // Update positions
    const data = JSON.stringify((rfInstance as any).toObject());
    download(data, `${title.replace(' ', '_')}.json`, 'text/plain');
  }
  /**
   * Called when a node is clicked
   */
  const onNodeClick = (event: any, element: any) => {
    setLastSelectedPos(vectorAdd(element.position as Vector, { x: 100, y: 100 }));
    setSelectedNodeId(element.id);
  }
  /**
   * Called when an edge is updated
   */
  const onEdgeUpdate = (oldEdge: any, newConnection: any) => {
    setFlowElements(updateEdge(oldEdge, newConnection, flowElements));
  }
  /**
   * Caleld when two points are connected
   */
  const onConnect = (params: any) => {
    // Create an edge
    setFlowElements(addEdge({ ...params, type: 'buttonedge'}, flowElements))
  }
  const removeEdge = (id: string) => {
    setFlowElements(flowElements.filter(e => e.id !== id))
  }
  const onTestForm = () => {
    setShowForm(true);
  }
  const renderForm = () => {
    if (showForm) {
      return (
        <div className={styles.backdrop}>
          <div className={styles.backdropElementWrapper}>
            <div className={styles.backdropHeader}>
              <MdRemoveCircle
                className={styles.backdropRemoveBtn}
                onClick={() => setShowForm(false)}/>
            </div>
            <div className={styles.backdropMain}>
              <Form formData={parseToGraph(flowElements)}/>
            </div>
          </div>
        </div>
      )
    }
    return (null)
  }
  return (
    <div className={styles.app}>
      <input type="file" 
        accept="application/JSON"
        className={styles.fileInput} ref={fileInput}/>
      {renderForm()}
      <Header
        onTestForm={onTestForm}
        onLoadSave={onLoadSave}
        onSave={onSave}
        onExport={onExport}
        createNode={createNode} title={title} setTitle={setTitle}/>
      <Sidepanel
        deleteNode={() => removeNode(selectedNodeId)}
        nodeData={getSelectedNodeData()}
        setNodeData={(data: any) => setNode(selectedNodeId, data)}
      />
      <div className={styles.flowWrapper}>
      <RemoveEdgeContext.Provider value={removeEdge}>
        <SelectedNodeIdContext.Provider value={selectedNodeId}>
          <ReactFlow
            nodeTypes={{ question: Questionnode, end: Endnode }}
            edgeTypes={{ buttonedge: ButtonEdge }}
            elements={flowElements}
            onElementClick={onNodeClick}
            onEdgeUpdate={onEdgeUpdate}
            onConnect={onConnect}
            onLoad={(a: any) => setRfInstance(a)}
          >
            <Background
              variant={BackgroundVariant.Dots}
              gap={24}
              size={1}
            />
            <MiniMap
              nodeColor={(node) => {
                switch (node.type) {
                  case 'input':
                    return '#FCB332';
                  case 'question':
                    return '#EB4B64';
                  case 'end':
                    return '#6CE063';
                  default:
                    return '#eee';
                }
              }}
              nodeStrokeWidth={3}
            />
            <Controls className={styles.controls}>
              <ControlButton onClick={() => createNode(NodeTypes.Start)}
                className={styles.customControlBtn}>
                <FaPlay className={styles.controlStartIcon}/>
              </ControlButton>
              <ControlButton onClick={() => createNode(NodeTypes.Question)}
                className={styles.customControlBtn}>
                <FaQuestionCircle className={styles.controlsQuestionIcon}/>
              </ControlButton>
              <ControlButton onClick={() => createNode(NodeTypes.End)}
                className={styles.customControlBtn}>
                <FaFlagCheckered className={styles.controlsEndIcon}/>
              </ControlButton>
            </Controls>
          </ReactFlow>
        </SelectedNodeIdContext.Provider>
      </RemoveEdgeContext.Provider>
      </div>
    </div>
  );
}

export default App;
