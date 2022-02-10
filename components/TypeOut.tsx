import { useEffect, useState } from "react"

const TypeOut = ({ text, delay, onComplete }: {text: string, delay?: number, onComplete?: () => void}) => {
      const [currentText, setCurrentText] = useState('')

    useEffect(() => {
        const interval = setTimeout(() => {
        if (currentText.length < text.length) {
            setCurrentText(text.substring(0, currentText.length + 1))
        } else {
            clearInterval(interval)
            setCurrentText(text)
            if (onComplete) {
            onComplete()
            }
        }
        }, delay || 100)
    }, [text, currentText, delay, onComplete])

    return (
        <span className="font-mono">{currentText}</span>
    )
}

export default TypeOut
