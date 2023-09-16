const useSkills = (studentId) => {
  // finish it by yourself
  const [, setCookie] = useCookies(["studentId"])
  return async (studentId) => {
    try {
      await axios.get(`https://api.projectszero.tech/skills/${studentId}`).then(resp => {
        console.log(resp.data);
      })
      setCookie("studentId", studentId);
      alert("讀取成功");
    } catch (error) {
      alert(error);

    }
  };
};

export default useSkills;
