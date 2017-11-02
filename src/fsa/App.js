import React from "react";
import * as cytoscape from 'cytoscape';
import * as regCose from 'cytoscape-cose-bilkent';

require("!style-loader!css-loader!sass-loader!./App.css");

regCose( cytoscape );

const enquiry_overview = {
  id: 'enquiry_overview',
  initial: 'timeline',
  states: {
    timeline: {
      on: {
        CALENDAR_EXPANDING_CLICK: "calendar",
      }
    },
    calendar: {
      on: {
        SELECT_DATE: "timeline",
      }
    }
  }
}


const enquiry_management = {
  id: 'enquiry_management',
  initial: 'overview',
  states: {
    overview: {
      on: {
        BOTTOM_TAB_SEARCH_CLICK: "search_enquiry",
        BOTTOM_TAB_ADD_CLICK: "add_enquiry",
        BOTTOM_TAB_FILTER_CLICK: "filter_enquiry",
        ENQUIRY_CARD_CLICK: "detail_enquiry",
      },
      ...enquiry_overview
    },
    search_enquiry: {
      on: {
        CANCEL_BUTTON_ENQUIRY_CLICK: "overview"
      }
    },
    add_enquiry: {
      on: {
        CANCEL: "overview",
        SUCCESS: "detail_enquiry"
      }
    },
    detail_enquiry: {
      on: {
        CLOSE: "overview"
      }
    },
    filter_enquiry: {
      on: {
        APPLY_FILTER_CLICK: "overview",
        CANCEL: "overview",
      }
    }
  },
};

const systems = {
  id: 'sytems',
  initial: 'enquiry_management',
  states: {
    enquiry_management: {
      on: {
        HEADER_NOTIFICATION_ICON_CLICK: 'notification',
        SIDE_MENU_ACTIVITY_CLICK: 'activity_management',
      },
      ...enquiry_management
    },
    activity_management: {
      on: {
        HEADER_NOTIFICATION_ICON_CLICK: 'notification',
        SIDE_MENU_ENQUIRY_CLICK: 'enquiry_management',
      }
    },
    notification: {
      on: {
        SIDE_MENU_ACTIVITY_CLICK: 'activity_management',
        SIDE_MENU_ENQUIRY_CLICK: 'enquiry_management',
      }
    },
  }
};

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      nodes: [],
      edges: [],
      raw: JSON.stringify(systems, null, 2),
      machine: systems
    }
  }

  initializeMachine() {
    const { machine } = this.state;
    const nodes = [];
    const edges = [];

    function addNodesAndEdges(node, key, parent) {
      const id = parent ? parent + '.' + key : key;

      if (parent) {
        nodes.push({
          data: {
            id,
            label: key,
            parent
          }
        });
      }

      if (node.states) {
        const states = Object.keys(node.states)
          .map(key => ({
            ...node.states[key],
            id: key
          }))
          .concat({
            id: '$initial',
            initial: 1,
            on: {'': node.initial}
          });

        states.forEach(state => {
          addNodesAndEdges(state, state.id, id)
        });
      }

      if (node.on) {
        const visited = {};
        Object.keys(node.on).forEach(event => {
          const target = node.on[event];
          (visited[target] || (visited[target] = [])).push(event);
        });

        Object.keys(visited).forEach(target => {
          edges.push({
            data: {
              id: key + ':' + target,
              source: id,
              target: parent ? parent + '.' + target : target,
              label: visited[target].join(',\n'),
            }
          });
        });
      }
    }

    addNodesAndEdges(machine, machine.id || 'machine');

    this.cy = cytoscape({
      container: this.cyNode,

      boxSelectionEnabled: true,
      autounselectify: true,

      style: `
        node[label != '$initial'] {
          content: data(label);
          text-valign: center;
          text-halign: center;
          shape: roundrectangle;
          width: label;
          height: label;
          padding-left: 5px;
          padding-right: 5px;
          padding-top: 5px;
          padding-bottom: 5px;
          background-color: white;
          border-width: 1px;
          border-color: black;
          font-size: 10px;
          font-family: Helvetica Neue;
        }
        node:active {
          overlay-color: black;
          overlay-padding: 0;
          overlay-opacity: 0.1;
        }
        .foo {
          background-color: blue;
        }
        node[label = '$initial'] {
          visibility: hidden;
        }
        $node > node {
          padding-top: 1px;
          padding-left: 10px;
          padding-bottom: 10px;
          padding-right: 10px;
          text-valign: top;
          text-halign: center;
          border-width: 1px;
          border-color: black;
          background-color: white;
        }
        edge {
          curve-style: bezier;
          width: 1px;
          target-arrow-shape: triangle;
          label: data(label);
          font-size: 5px;
          font-weight: bold;
          text-background-color: #fff;
          text-background-padding: 3px;
          line-color: black;
          target-arrow-color: black;
          z-index: 100;
          text-wrap: wrap;
          text-background-color: white;
          text-background-opacity: 1;
          target-distance-from-node: 2px;
        }
        edge[label = ''] {
          source-arrow-shape: circle;
          source-arrow-color: black;
        }
      `,

      elements: {
        nodes,
        edges
      },

      layout: {
        name: 'cose-bilkent',
        randomize: true,
        idealEdgeLength: 70,
        animate: false
      }
    });
  }

  componentDidMount() {
    this.initializeMachine();
  }

  handleChange(raw) {
    this.setState({ raw });
  }

  generateGraph() {
    try {
      // be a little lax.
      const machine = eval(`var r=${this.state.raw};r`);
      console.log(machine);
      this.setState({ machine, error: false }, this.initializeMachine);

    } catch(e) {
      console.error(e);
      this.setState({ error: true });
    }
  }

  render() {
    return <div className="container">
      <div className="editor">
        <textarea
          value={this.state.raw}
          onChange={e => this.handleChange(e.target.value)}
        />
        <button onClick={() => this.generateGraph()}>Generate graph</button>
      </div>
      <div id="cy" ref={n => this.cyNode = n} />
    </div>
  }
}

export default App;
