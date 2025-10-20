useEffect(() =>{
  const timeout = (() => {
    fetch("https://example.com")
     .then(res => res.json)
     .then(data => setData(data)) 
  }, [query])
}, 250)