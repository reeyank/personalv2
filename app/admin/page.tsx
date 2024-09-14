"use client"

import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

export default function Page() {
    const [pause, setPaused] = useState(false);
    const [text, setText] = useState(pause ? 'Paused' : 'Playing');
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        fetch('/admin/api')
          .then((res) => res.text())
          .then((res) => {
            try {
                const pause = res === 'true'
                setPaused(pause)
                setText(pause ? 'Paused' : 'Playing')
            } catch (e) {
                console.error(e)
            }
            setLoading(false)
          })
      }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    function togglePause() {
        fetch('/admin/api', {
            method: 'POST',
        })
        setPaused(!pause)
        setText(!pause ? 'Paused' : 'Playing')
    }

    return (
        <div className="flex justify-center items-center h-screen">
            <Button variant="destructive" onClick={togglePause}>
                {text}
            </Button>
        </div>
    )
}