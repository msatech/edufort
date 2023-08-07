import React from 'react'
import './Faq.css'

import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';

import 'react-accessible-accordion/dist/fancy-example.css';
import ComponentTitle from '../ComponentTitle/ComponentTitle';

function Faq() {

    const items = [
        {
            "id": "1",
            "heading": "How can i contact you?",
            "content": "You can send us an email on support@edufort.in and we will answer your query"
        },
        {
            "id": "2",
            "heading": "How can i contact you?",
            "content": "You can send us an email on support@edufort.in and we will answer your query"
        },
        {
            "id": "3",
            "heading": "How can i puchase course?",
            "content": "You can send us an email on support@edufort.in and we will answer your query"
        },
    ]

    return (
        <div className='faq__component'>
            <ComponentTitle title="Frequently Asked Questions" subTitle="FAQ" />
            <div className='faq__accordian'>
                <Accordion allowZeroExpanded>
                    {items.map((item) => (
                        <AccordionItem key={item.id}>
                            <AccordionItemHeading  >
                                <AccordionItemButton>
                                    {item.heading}
                                </AccordionItemButton>
                            </AccordionItemHeading>
                            <AccordionItemPanel>
                                {item.content}
                            </AccordionItemPanel>
                        </AccordionItem>
                    ))}
                </Accordion>
            </div>
        </div>
    )
}

export default Faq
