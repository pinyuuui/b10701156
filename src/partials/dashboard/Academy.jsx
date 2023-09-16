import DoughnutChart from "../../charts/DoughnutChart";
// import { academyStats } from "../../data/mockData";
import useAcademystats from "../../hooks/dashboard/useAcademystats";

function Academy() {

  const labelMappings = {
    "心理所一般組": "理學院", 
    "創新領域學士學位學程": "創新設計學院", 
    "電機工程學系": "電機資訊學院", 
    "數學系": "理學院", 
    "生物機電工程學系": "電機資訊學院", 
    "經濟學系": "社會科學院", 
    "科際整合法律學研究所": "理學院", 
    "物理學系": "理學院", 
    "材料科學與工程學系": "管理學院", 
    "工商管理學系 科技管理組": "管理學院",
     "工商管理學系": "管理學院", 
     "會計學系": "管理學院", 
     "心理學系": "理學院", 
     "物理治療學系": "理學院", 
     "國際企業學系": "管理學院", 
     "工程科學及海洋工程學系": "理學院", 
     "醫學工程學系": "理學院", 
     "戲劇學系": "文學院", 
     "資訊管理學系": "管理學院", 
     "資訊工程學系": "電機資訊學院", 
     "生醫電資所": "電機資訊學院", 
     "外國語文學系 / 圖書資訊學系": "文學院", 
     "歷史學系": "文學院", 
     "資訊工程研究所": "管理學院", 
     "經濟系": "社會科學院", 
     "外國語文學系/社會學系": "文學院"
  }
  const labels2_count = {
    "理學院" : 0, 
    "文學院" : 0, 
    "管理學院": 0,
    "創新設計學院" : 0,
    "電機資訊學院" : 0,
    "社會科學院" : 0
  }
  // console.log(labelMappings['外國語文學系/社會學系']);

  let { labels, values } = useAcademystats();
  if(labels === undefined)
    return;
  if(!(labels === undefined)) {
    // console.log(labels.length);
    for(let i = 0; i < labels.length; i++) {
      var label2 = labelMappings[labels[i]]
      labels2_count[label2] += values[i];
      // console.log(labels[i], values[i], label2, labels2_count[label2]);
    }
  }

  var values2 = Object.values(labels2_count);
  // console.log(values2)

  labels = Object.keys(labels2_count);
  values = values2
  console.log(labels);
  console.log(values);

  // const { labels, values } = academyStats;

  // 生成隨機色碼的函式
  const getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i += 1) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };
  
  const chartData = {
    labels,
    datasets: [
      {
        label: "Distribution of colleges",
        data: values,
        backgroundColor: values?.map(() => getRandomColor()),
        borderWidth: 0
      }
    ]
  };

  return (
    <div className="flex flex-col col-span-full dark:bg-slate-800 shadow-lg border border-slate-200 dark:border-slate-700">
      <header className="px-5 py-4 border-b border-slate-100 dark:border-slate-700">
        <h2 className="font-semibold text-slate-800 dark:text-slate-100">
          Distribution of colleges
        </h2>
      </header>
      {/* Chart built with Chart.js 3 */}
      {/* Change the height attribute to adjust the chart height */}
      {labels && <DoughnutChart data={chartData} width={389} height={260} />}
    </div>
  );
}

export default Academy;
