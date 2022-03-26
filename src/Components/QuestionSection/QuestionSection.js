import React from 'react';
import { Accordion } from 'react-bootstrap';
import './QuestionSection.css'

const QuestionSection = () => {
    return (
        <div className='mb-5 mt-1 Question-Section'>
            <Accordion className='accordian'>
                <Accordion.Item eventKey="0">
                    <Accordion.Header><h4>Difference Between Props and State?</h4></Accordion.Header>
                    <Accordion.Body>
                        <strong className='fs-4'>1)Props : </strong>
                        <p className='fs-5 fst-normal'>Properties are known as props,Props allows to pass data from one parent component to others child component.Child can not pass props to parent component.Props are immutable,that means props are read only,but its can not be modified.</p>
                        <br />
                        <strong className='fs-4'>2)State : </strong>
                        <p className='fs-5 fst-normal'>If a component needs to change data ,then it will consider as state.State is mutable that means we can read and also modify the state.State used only in state components.State can not be accedd by child components.</p>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header><h4>How useState Works?</h4></Accordion.Header>
                    <Accordion.Body>
                        <p className='fs-5 fst-normal'>useState function is a React hook , which allow us to have sate variables is functional components.When we call useState() is return us a pair of value : current state and a function that update the state.
                            During initial render,the returned state is the same as as the value passed as the first argument .If we render again ,then it set new value to state by using useState function.</p>
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </div>
    );
};

export default QuestionSection;