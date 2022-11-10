export const validateCollege = (college) => {
	const COLLEGES = [
		"",
		"CEA",
		"COLLEGE OF ENGINEERING AND ARCHITECTURE",
		"CITC",
		"COLLEGE OF INFORMATION TECHNOLOGY AND COMPUTING",
		"CSM",
		"COLLEGE OF SCIENCE AND MATHEMATICS",
		"CSTE",
		"COLLEGE OF SCIENCE AND TECHNOLOGY EDUCATION",
		"COT",
		"COLLEGE OF TECHNOLOGY",
	];

	if (COLLEGES.includes(college.toUpperCase()) === true) {
		return true;
	} else {
		return false;
	}
};

export const validateEmail = (email) => {
	if (email === "") {
		return true;
	}
	const VALID_EMAIL = new RegExp(
		"([a-zA-Z0-9._]{4,16})+[@]+([a-zA-Z0-9]{2,6})+[.]+[a-zA-Z0-9]{2,6}"
	);

	if (email.search(VALID_EMAIL) === 0) {
		return true;
	} else {
		return false;
	}
};

export const validatePassword = (password) => {
	if (password === "") {
		return true;
	}

	const VALID_PASSWORD = new RegExp(
		"(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()]){8,16}"
	);

	if (password.search(VALID_PASSWORD) === 0) {
		return true;
	} else {
		return false;
	}
};

export const validateConfirmPassword = (password, confirmPassword) => {
	if (confirmPassword === "") {
		return true;
	}

	if (password === confirmPassword) {
		return true;
	} else {
		return false;
	}
};
