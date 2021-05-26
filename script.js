	
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
function getTotal(){
	
	var totalGPA=0;
	var countPoint=0;
	var p=$('.lessonName').parent()
	p.each(function(index,element){ 
		let classType=element.children[1].children[0].textContent;
		let classPoint=parseFloat(element.children[4].textContent);
		let classGrade=parseInt(element.children[10].textContent);
		let classGPA=getGPA(classGrade)
			
		if(element.children[10].textContent==""){
			return;
		}
		if(classType=="公共基础必修"||classType=="专业教育必修"||classType=="公共必修"||classType=="专业教育选修"){
			countPoint+=classPoint;
			totalGPA+=classPoint*classGPA
			console.log("class name："+element.children[0].textContent);
			console.log("已修学分："+countPoint);
		
		}

	    //console.log(index,element.children[1]);
	})
	result=totalGPA/countPoint;
	console.log("GPA:"+result);
	
}
