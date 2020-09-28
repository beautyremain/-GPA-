var work_place=$("tbody")[0]
var sum=0//总绩点
var points=0//总学分
for(var i=1;i<work_place.children.length;i++){//第一行是表头
	var each = work_place.children[i] //获取了table每一横排的实体
	var each_point=each.children[4].innerText
	var each_grade=each.children[10].innerText
	//对数据的筛选操作 
	if(each.children[1].innerText=="通识教育选修"
	||(each.children[1].innerText=="公共基础必修"&&each.children[0].innerText.search("高等数学")==-1&&each.children[0].innerText.search("大学物理")==-1)
	||(each.children[1].innerText=="公共必修"&&each.children[0].innerText.search("高等数学")==-1&&each.children[0].innerText.search("大学物理")==-1)
	||each.children[1].innerText=="专业教育选修"
	||each.children[1].innerText=="公共基础选修"){
		continue;
	}
	else if(each_grade==""){
		continue;
	}
	//else if(each.children[6].innerText=="化学与分子科学学院"){
	//	continue;
	//}
	else{
		var point = parseFloat(each_point)*getGPA(parseFloat(each_grade))
		console.log(each.children[0].innerText+": "+each.children[10].innerText)
		sum += parseFloat(point)
		points += parseFloat(each_point)
	}
}
var result=sum/points //GPA
//GPA换算
function getGPA(point){
	if(point>=90){
		return 4.0
	}
	else if(point>=85){
		return 3.7
	}
	else if(point>=82){
		return 3.3
	}
	else if(point>=80){
		return 3.0
	}
	else if(point>=75){
		return 2.7
	}
	else if(point>=72){
		return 2.3
	}
	else if(point>=68){
		return 2.0
	}
//后续的计数没有做详细对照
	else if(point>=64){
		return 1.5
	}
	else{
		return 1
	}
}