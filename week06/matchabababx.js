function matchStr(str) {
	let state = start;
	for (let s of str) {
		console.log(`deal with: ${s}`);
		state = state(s); //s为当前状态对应字符的下一个字符
	}
	return state === end ? `find abababx pattern in ${str}` : 'no find';
}

function start(s) {
	if (s === 'a') {
		return fA;
	}
	return start;
}

function fA(s) {
	if (s === 'b') {
		return fB;
	}
	return start(s);
}

function fB(s) {
	if (s === 'a') {
		return fA2;
	}
	return start(s);
}

function fA2(s) {
	if (s === 'b') {
		return fB2;
	}
	return start(s);
}

function fB2(s) {
	if (s === 'a') {
		return fA3;
	}
	return start(s);
}

function fA3(s) {
	if (s === 'b') {
		return fB3;
	}
	return start(s);
}

function fB3(s) {
	if (s === 'x') {
		return end;
	}
	return fB2(s); //aba “b ” xxx
}

function end(s) {
	return end;
}

console.log(matchStr('I am abaabababx'));
//console.log(matchStr('abcaabcabx'));
