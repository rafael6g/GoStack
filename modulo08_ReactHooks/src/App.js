import React, { useState, useEffect, useMemo, useCallback } from 'react';

function App() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  const handleAdd = useCallback(() => {
    setTech([...tech, newTech]);
    setNewTech('');
  }, [newTech, tech]);

  useEffect(() => {
    const StorageTech = localStorage.getItem('tech');

    if (StorageTech) {
      setTech(JSON.parse(StorageTech));
    }

    /**
     * Muito raro usar, mas so sera usado sempre
     * que o componente deiar de existir
     * Usado muito em eventListener
     *
     * return () => {
     *  document.removeEventListener()
     * };
     */
  }, []);

  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  const techSize = useMemo(() => tech.length, [tech]);

  return (
    <>
      <ul>
        {tech.map(t=> (
          <li key={t}>{t}</li>
        ))}
      </ul>
        <strong>Você tem {techSize} Tecnologicas</strong>
        <br />
      <input value={newTech} onChange={e => setNewTech(e.target.value)} />
      <button type="button" onClick={handleAdd}>
        Adicionar
      </button>
    </>
  );
}

export default App;
