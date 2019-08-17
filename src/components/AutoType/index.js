import React from 'react'
import helperUitl from '../../utils/Helper'

export default class AutoType extends React.Component {
    state = {
        indexChar: 0,
        indexText: 0,
        text: '',
        textList: [],
        blinkingCursor: false,
    }
    typeInterval = null
    typeDuration = this.props.typeDuration || 100
    nextWordWait = this.props.nextWordWait || 3000

    componentDidMount() {
        this.setState({
            textList: helperUitl.shuffleArray(this.props.textList)
        })

        this.typeInterval = setInterval(() => {
            this.handleType()
        }, this.typeDuration)
    }
    
    handleType = () => {
        let { indexText, indexChar, text, textList } = this.state
        let fullText = textList[indexText]
        let fullTextLength = fullText.length

        text += fullText[indexChar]
        indexChar++;

        this.setState({
            text,
            indexChar,
        })

        if(indexChar === fullTextLength) {
            this.handleNextWord()
        }
        else {

        }
    }

    handleNextWord = () => {
        let { indexText, indexChar, text, textList } = this.state

        indexText++
        indexChar = 0
        text = ''

        if(indexText > textList.length - 1) {
            indexText = 0
        }

        // Stop auto type
        clearInterval(this.typeInterval)
        this.setState({blinkingCursor: true})

        // Wait
        setTimeout(() => {
            // Then clear
            this.setState({
                text,
                indexText,
                indexChar,
                blinkingCursor: false,
            }, () => {
                // Then a uto type
                this.typeInterval = setInterval(() => this.handleType(), this.typeDuration)
            })
        }, this.nextWordWait)
    }

    render() {
        const { text, blinkingCursor } = this.state

        return (
            <div className="AutoType">
                <div className="AutoTypeWord">
                    <p>{text}</p> <div className={`AutoTypeCursor ${blinkingCursor ? 'blinking' : ''}`}></div>
                </div>
            </div>
        )
    }
}