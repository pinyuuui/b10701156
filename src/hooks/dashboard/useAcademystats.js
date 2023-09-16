import useSWRFetch from "../useSWRFetch";

const useAcademystats = () => {
  const { data } = useSWRFetch("https://api.projectszero.tech/getAcademyStats");
  return {
    labels: data && Object.keys(data),
    values: data && Object.values(data)
  };
};
export default useAcademystats;

// const labelMappings = [
//   { labelsToCombine: ["心理所一般組", "數學系", "物理學系", "心理學系"], newLabel: "理學院"},
//   { labelsToCombine: ["創新領域學士學位學程"], newLabel: "創新設計學院"},
//   { labelsToCombine: ["電機工程學系", "資訊工程學系", "生醫電資所", "資訊工程研究所"], newLabel: "電機資訊學院"},
//   { labelsToCombine: ["生物機電工程學系"], newLabel: "生物資源暨農學院"},
//   { labelsToCombine: ["經濟學系", "經濟系"], newLabel: "社會科學院"},
//   { labelsToCombine: ["科際整合法律學研究所"], newLabel: "法律學院"},
//   { labelsToCombine: ["材料科學與工程學系", "工程科學及海洋工程學系", "醫學工程學系"], newLabel: "工學院"},
//   { labelsToCombine: ["工商管理學系 科技管理組", "工商管理學系", "會計學系", "國際企業學系", "資訊管理學系"], newLabel: "管理學院"},
//   { labelsToCombine: ["物理治療學系"], newLabel: "醫學院"},
//   { labelsToCombine: ["戲劇學系", "外國語文學系 / 圖書資訊學系", "歷史學系", "外國語文學系/社會學系"], newLabel: "文學院"}
// ]
