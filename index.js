
const fetchData = async () => {
  try {
    const res = await fetch('');
    if (res.ok) {
      const data = await res.json();
      console.log(data);
    }
  } catch (e) {
    console.log(e.message);
  } finally {
    alert(data);
  }
};
