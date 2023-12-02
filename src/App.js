import './App.css';
import { useEffect, useState } from 'react';
import img from './image.jpg'
import useLocalStorage from './storage';

const App = () => {
  const [html, setHtml] = useLocalStorage('html','');
  const [css, setCss] = useLocalStorage('css','');
  const [js, setJs] = useLocalStorage('js','');
  const [codepenCode, setCodepenCode] = useState('')

  useEffect(()=> {
    const timerout = setTimeout(()=>{
      setCodepenCode(`
      <body>${html}</body>
      <style>${css}</style>
      <script>${js}</script>
      `)
    }, 200)
    return () => clearInterval(timerout)
  }, [html,css,js])

  return (
    <div className='wrapper'>
      <div className='header'>
        <img src={img} alt='' />
        <span>Codepen</span>
      </div>
      <div className='input-cover'>
        <textarea className='input' type='text' placeholder='HTMl' value={html} onChange={(e)=>setHtml(e.target.value)} />
        <div className='width' />
        <textarea className='input' type='text' placeholder='CSS' value={css} onChange={(e)=>setCss(e.target.value)} />
        <div className='width' />
        <textarea className='input' type='text' placeholder='JS' value={js} onChange={(e)=>setJs(e.target.value)} />
      </div>
      <div className='output'>
        <iframe
        srcDoc={codepenCode}
        title='output'
        sandbox='allow-scripts'
        width='100%'
        height='100%'
        />
      </div>
    </div>
  )
}

export default App;
