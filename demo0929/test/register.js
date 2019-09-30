/**
 * 打开注册窗口
 */
function openRegisterDialog() {
	//获得注册窗口的DOM对象
	var register = document.getElementById("register");
	//显示注册窗口
	register.style.display = "block";
	//移除绑定单击事件
	register.removeEventListener("click", function() {});
	//绑定单击事件
	register.addEventListener("click", function(e) {
		document.getElementById("register").style.display = "none";
	});
	register.getElementsByTagName("section")[0].addEventListener("click", function(e) {
		var event = e || window.event;
		e.stopPropagation();
	});
	//第1个输入框获得焦点
	document.getElementById("userNameField").focus();
}

/**
 * 验证表单输入内容
 */
function validateForm() {
	//获得表单输入控件
	var userNameField = document.getElementById("userNameField");
	var passwordField = document.getElementById("passwordField");
	var telphoneField = document.getElementById("telphoneField");
	//用户名验证
	//获得错误提示标签元素的DOM对象
	var userNameError = userNameField.parentNode.getElementsByTagName("span")[0];
	if(!userNameField.value) {
		//添加错误信息
		userNameError.innerHTML = "请输入用户名!";
		//输入框重写获得焦点
		userNameField.focus();
		//终止表单提交
		return false;
	} else {
		userNameError.innerHTML = "*";
	}
	//密码验证
	//获得错误提示的DOM对象
	var passwordError = passwordField.parentNode.getElementsByTagName("span")[0];
	if(!passwordField.value) {
		passwordError.innerHTML = "请输入密码!";
		passwordField.focus();
		return false;
	} else if(!/^[A-Za-z0-9]{6,16}$/.test(passwordField.value)) {
		passwordError.innerHTML = "请输入密码格式!";
		passwordField.select();
		return false;
	} else {
		passwordError.innerHTML = "*";
	}
	//联系电话验证

	return false;
}

//横幅图像的数量（物理数量）
var count = 6;

function init() {
	//获得横幅对象
	banner = document.getElementById("banner");
	//获得左右按钮对象
	btnLeft = banner.getElementsByTagName("span")[0];
	btnRight = banner.getElementsByTagName("span")[1];
	//获得橫幅图像
	bannerImg = banner.getElementsByTagName("section")[0];
	//横幅绑定鼠标移到事件
	banner.addEventListener("mouseover", function() {
		btnLeft.style.display = "block";
		btnRight.style.display = "block";
	});
	banner.onmouseout = function() {
		btnLeft.style.display = "none";
		btnRight.style.display = "none";
	}
	//移动横幅按钮绑定事件
	btnLeft.addEventListener("click", function() {
		//获得左部边界
		var marginLeft = parseInt(bannerImg.style.marginLeft || -100);
		//计算要显示下一张的图像的边界
		marginLeft = marginLeft + 100;
		//判断显示的是否是物理上的第一张图像
		if(marginLeft == 0) {
			return;
			//marginLeft = -(count-2)*100; 
		}
		//设置边界
		bannerImg.style.marginLeft = marginLeft + "%";
	});
	btnRight.addEventListener("click", function() {
		//获得左部边界
		var marginLeft = parseInt(bannerImg.style.marginLeft || -100);
		//计算要显示下1张的图像的边界
		marginLeft = marginLeft - 100;
		//判断显示的是否是物理上的最后1张图像
		if(marginLeft == -(count - 1) * 100) {
			return;
			//marginLeft = -100; 
		}
		//设置边界
		bannerImg.style.marginLeft = marginLeft + "%";
	});
}