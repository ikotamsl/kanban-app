import logo from './logo.svg';
import './App.css';
import Board from '@asseinfo/react-kanban';
import '@asseinfo/react-kanban/dist/styles.css';

let newTaskVar = {};

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min); //The maximum is inclusive and the minimum is inclusive
}


function onCardNew (newTask)  {
    const id = getRandomIntInclusive(1, 1000);
    newTask = {
        id: id,
        ...newTask
    };

    console.log(newTaskVar);
    fetch("http://localhost:3500/task", {
        method: 'POST',
        body: JSON.stringify(
            {
                taskid: id,
                statusStatusid: 1,
                employeeEmployeeid: 1,
                projectProjectid: 1,
                description: newTask.description,
                title: newTask.title
            }
        ),
        headers: {"Content-Type": "application/json"}
    })
        .then(res => res.json())
        .finally((res) => {
            console.log(res);
        })

    return newTask
}


const board = {
    columns: [
        {
            id: 1,
            title: "Backlog",
            cards: [
                {
                    id: 1,
                    title: "Card title 1",
                    description: "Card content"
                },
                {
                    id: 2,
                    title: "Card title 2",
                    description: "Card content"
                },
                {
                    id: 3,
                    title: "Card title 3",
                    description: "Card content"
                }
            ]
        },
        {
            id: 2,
            title: "Doing",
            cards: [
                {
                    id: 9,
                    title: "Card title 9",
                    description: "Card content"
                }
            ]
        },
        {
            id: 3,
            title: "Q&A",
            cards: [
                {
                    id: 10,
                    title: "Card title 10",
                    description: "Card content"
                },
                {
                    id: 11,
                    title: "Card title 11",
                    description: "Card content"
                }
            ]
        },
        {
            id: 4,
            title: "Production",
            cards: [
                {
                    id: 12,
                    title: "Card title 12",
                    description: "Card content"
                },
                {
                    id: 13,
                    title: "Card title 13",
                    description: "Card content"
                }
            ]
        }
    ]
};

function UncontrolledBoard() {
    return (
        <Board
            allowRemoveLane
            allowRenameColumn
            allowRemoveCard
            onLaneRemove={console.log}
            onCardRemove={console.log}
            onLaneRename={console.log}
            initialBoard={board}
            allowAddCard={{ on: "top" }}
            onNewCardConfirm={onCardNew}
            onCardNew={console.log}
        />
    );
}

function App() {
    return (
        <>
            <h4>Example of an uncontrolled board</h4>
            <UncontrolledBoard />
            <h4>Example of a controlled board</h4>
            <p>Just the card moving is implemented in this demo.</p>
            <p>
                In this kind of board, you can do whatever you want. We just mirror your
                board state.
            </p>
            {/*<ControlledBoard />*/}
        </>
    );
}

export default App;
