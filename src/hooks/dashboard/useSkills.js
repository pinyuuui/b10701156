// const useSkills = (studentId) => {
//   // finish it by yourself
//   // const [, setCookie] = useCookies(["studentId"])
//   return async () => {
//     try {
//       await axios.get(`https://api.projectszero.tech/skills/${studentId}`).then(resp => {
//         console.log(resp.data);
//       })
//       alert("讀取成功");
//       labels : resp.data;
//     } catch (error) {
//       alert(error);

//     }
//   };
// };

// export default useSkills;

import useSWRFetch from "../useSWRFetch";

const useSkills = (studentId) => {
  const { data } = useSWRFetch(`https://api.projectszero.tech/skills/${studentId}`);
  return {
    labels: data && Object.keys(data),
    values: data && Object.values(data)
  };
};
export default useSkills;

