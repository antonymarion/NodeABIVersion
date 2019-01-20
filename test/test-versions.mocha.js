describe('test-versions', () => {

	const assert = require('chai').assert;
	const NodeABI = require('../main.js');

	it('NODE_MODULE_VERSION: 67', () => {
		assert.equal('67', NodeABI.getABIVersionByNodeVersion('11.7.0'));
		assert.equal('67', NodeABI.getABIVersionByNodeVersion('11.6.0'));
		assert.equal('67', NodeABI.getABIVersionByNodeVersion('11.5.0'));
		assert.equal('67', NodeABI.getABIVersionByNodeVersion('11.4.0'));
		assert.equal('67', NodeABI.getABIVersionByNodeVersion('11.3.0'));
		assert.equal('67', NodeABI.getABIVersionByNodeVersion('11.2.0'));
		assert.equal('67', NodeABI.getABIVersionByNodeVersion('11.1.0'));
		assert.equal('67', NodeABI.getABIVersionByNodeVersion('11.0.0'));
	});

	it('NODE_MODULE_VERSION: 64', () => {
		assert.equal('64', NodeABI.getABIVersionByNodeVersion('10.13.0'));
		assert.equal('64', NodeABI.getABIVersionByNodeVersion('10.12.0'));
		assert.equal('64', NodeABI.getABIVersionByNodeVersion('10.11.0'));
		assert.equal('64', NodeABI.getABIVersionByNodeVersion('10.10.0'));
		assert.equal('64', NodeABI.getABIVersionByNodeVersion('10.9.0'));
		assert.equal('64', NodeABI.getABIVersionByNodeVersion('10.8.0'));
		assert.equal('64', NodeABI.getABIVersionByNodeVersion('10.7.0'));
		assert.equal('64', NodeABI.getABIVersionByNodeVersion('10.6.0'));
		assert.equal('64', NodeABI.getABIVersionByNodeVersion('10.5.0'));
		assert.equal('64', NodeABI.getABIVersionByNodeVersion('10.4.1'));
		assert.equal('64', NodeABI.getABIVersionByNodeVersion('10.4.0'));
		assert.equal('64', NodeABI.getABIVersionByNodeVersion('10.3.0'));
		assert.equal('64', NodeABI.getABIVersionByNodeVersion('10.2.1'));
		assert.equal('64', NodeABI.getABIVersionByNodeVersion('10.2.0'));
		assert.equal('64', NodeABI.getABIVersionByNodeVersion('10.1.0'));
		assert.equal('64', NodeABI.getABIVersionByNodeVersion('10.0.0'));
	});

	it('NODE_MODULE_VERSION: 59', () => {
		assert.equal('59', NodeABI.getABIVersionByNodeVersion('9.11.2'));
		assert.equal('59', NodeABI.getABIVersionByNodeVersion('9.11.1'));
		assert.equal('59', NodeABI.getABIVersionByNodeVersion('9.11.0'));
		assert.equal('59', NodeABI.getABIVersionByNodeVersion('9.10.1'));
		assert.equal('59', NodeABI.getABIVersionByNodeVersion('9.10.0'));
		assert.equal('59', NodeABI.getABIVersionByNodeVersion('9.9.0'));
		assert.equal('59', NodeABI.getABIVersionByNodeVersion('9.8.0'));
		assert.equal('59', NodeABI.getABIVersionByNodeVersion('9.7.1'));
		assert.equal('59', NodeABI.getABIVersionByNodeVersion('9.7.0'));
		assert.equal('59', NodeABI.getABIVersionByNodeVersion('9.6.1'));
		assert.equal('59', NodeABI.getABIVersionByNodeVersion('9.6.0'));
		assert.equal('59', NodeABI.getABIVersionByNodeVersion('9.5.0'));
		assert.equal('59', NodeABI.getABIVersionByNodeVersion('9.4.0'));
		assert.equal('59', NodeABI.getABIVersionByNodeVersion('9.3.0'));
		assert.equal('59', NodeABI.getABIVersionByNodeVersion('9.2.1'));
		assert.equal('59', NodeABI.getABIVersionByNodeVersion('9.2.0'));
		assert.equal('59', NodeABI.getABIVersionByNodeVersion('9.1.0'));
		assert.equal('59', NodeABI.getABIVersionByNodeVersion('9.0.0'));
	});

	it('NODE_MODULE_VERSION: 57', () => {
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.11.3'));
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.11.2'));
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.11.1'));
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.11.0'));
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.10.0'));
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.9.4'));
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.9.3'));
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.9.2'));
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.9.1'));
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.9.0'));
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.8.1'));
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.8.0'));
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.7.0'));
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.6.0'));
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.5.0'));
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.4.0'));
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.3.0'));
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.2.1'));
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.2.0'));
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.1.4'));
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.1.3'));
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.1.2'));
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.1.1'));
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.1.0'));
		assert.equal('57', NodeABI.getABIVersionByNodeVersion('8.0.0'));
	});

	it('NODE_MODULE_VERSION: 51', () => {
		assert.equal('51', NodeABI.getABIVersionByNodeVersion('7.10.1'));
		assert.equal('51', NodeABI.getABIVersionByNodeVersion('7.10.0'));
		assert.equal('51', NodeABI.getABIVersionByNodeVersion('7.9.0'));
		assert.equal('51', NodeABI.getABIVersionByNodeVersion('7.8.0'));
		assert.equal('51', NodeABI.getABIVersionByNodeVersion('7.7.4'));
		assert.equal('51', NodeABI.getABIVersionByNodeVersion('7.7.3'));
		assert.equal('51', NodeABI.getABIVersionByNodeVersion('7.7.2'));
		assert.equal('51', NodeABI.getABIVersionByNodeVersion('7.7.1'));
		assert.equal('51', NodeABI.getABIVersionByNodeVersion('7.7.0'));
		assert.equal('51', NodeABI.getABIVersionByNodeVersion('7.6.0'));
		assert.equal('51', NodeABI.getABIVersionByNodeVersion('7.5.0'));
		assert.equal('51', NodeABI.getABIVersionByNodeVersion('7.4.0'));
		assert.equal('51', NodeABI.getABIVersionByNodeVersion('7.3.0'));
		assert.equal('51', NodeABI.getABIVersionByNodeVersion('7.2.1'));
		assert.equal('51', NodeABI.getABIVersionByNodeVersion('7.2.0'));
		assert.equal('51', NodeABI.getABIVersionByNodeVersion('7.1.0'));
		assert.equal('51', NodeABI.getABIVersionByNodeVersion('7.0.0'));
	});

	it('NODE_MODULE_VERSION: 48', () => {
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.14.3'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.14.2'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.14.1'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.14.0'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.13.1'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.13.0'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.12.3'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.12.2'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.12.1'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.12.0'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.11.5'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.11.4'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.11.3'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.11.2'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.11.1'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.11.0'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.10.3'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.10.2'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.10.1'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.10.0'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.9.5'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.9.4'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.9.3'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.9.2'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.9.1'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.9.0'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.8.1'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.8.0'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.7.0'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.6.0'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.5.0'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.4.0'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.3.1'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.3.0'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.2.2'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.2.1'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.2.0'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.1.0'));
		assert.equal('48', NodeABI.getABIVersionByNodeVersion('6.0.0'));
	});

	it('NODE_MODULE_VERSION: 47', () => {
		assert.equal('47', NodeABI.getABIVersionByNodeVersion('5.12.0'));
		assert.equal('47', NodeABI.getABIVersionByNodeVersion('5.11.1'));
		assert.equal('47', NodeABI.getABIVersionByNodeVersion('5.11.0'));
		assert.equal('47', NodeABI.getABIVersionByNodeVersion('5.10.1'));
		assert.equal('47', NodeABI.getABIVersionByNodeVersion('5.10.0'));
		assert.equal('47', NodeABI.getABIVersionByNodeVersion('5.9.1'));
		assert.equal('47', NodeABI.getABIVersionByNodeVersion('5.9.0'));
		assert.equal('47', NodeABI.getABIVersionByNodeVersion('5.8.0'));
		assert.equal('47', NodeABI.getABIVersionByNodeVersion('5.7.1'));
		assert.equal('47', NodeABI.getABIVersionByNodeVersion('5.7.0'));
		assert.equal('47', NodeABI.getABIVersionByNodeVersion('5.6.0'));
		assert.equal('47', NodeABI.getABIVersionByNodeVersion('5.5.0'));
		assert.equal('47', NodeABI.getABIVersionByNodeVersion('5.4.1'));
		assert.equal('47', NodeABI.getABIVersionByNodeVersion('5.4.0'));
		assert.equal('47', NodeABI.getABIVersionByNodeVersion('5.3.0'));
		assert.equal('47', NodeABI.getABIVersionByNodeVersion('5.2.0'));
		assert.equal('47', NodeABI.getABIVersionByNodeVersion('5.1.1'));
		assert.equal('47', NodeABI.getABIVersionByNodeVersion('5.1.0'));
		assert.equal('47', NodeABI.getABIVersionByNodeVersion('5.0.0'));
	});

	it('NODE_MODULE_VERSION: 46', () => {
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.9.1'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.9.0'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.8.7'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.8.6'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.8.5'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.8.4'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.8.3'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.8.2'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.8.1'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.8.0'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.7.3'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.7.2'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.7.1'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.7.0'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.6.2'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.6.1'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.6.0'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.5.0'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.4.7'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.4.6'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.4.5'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.4.4'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.4.3'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.4.2'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.4.1'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.4.0'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.3.2'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.3.1'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.3.0'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.2.6'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.2.5'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.2.4'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.2.3'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.2.2'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.2.1'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.2.0'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.1.2'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.1.1'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.1.0'));
		assert.equal('46', NodeABI.getABIVersionByNodeVersion('4.0.0'));
	});

	it('NODE_MODULE_VERSION: 45', () => {
		assert.equal('45', NodeABI.getABIVersionByNodeVersion('3.3.1'));
		assert.equal('45', NodeABI.getABIVersionByNodeVersion('3.3.0'));
		assert.equal('45', NodeABI.getABIVersionByNodeVersion('3.2.0'));
		assert.equal('45', NodeABI.getABIVersionByNodeVersion('3.1.0'));
		assert.equal('45', NodeABI.getABIVersionByNodeVersion('3.0.0'));
	});

	it('NODE_MODULE_VERSION: 44', () => {
		assert.equal('44', NodeABI.getABIVersionByNodeVersion('2.5.0'));
		assert.equal('44', NodeABI.getABIVersionByNodeVersion('2.4.0'));
		assert.equal('44', NodeABI.getABIVersionByNodeVersion('2.3.4'));
		assert.equal('44', NodeABI.getABIVersionByNodeVersion('2.3.3'));
		assert.equal('44', NodeABI.getABIVersionByNodeVersion('2.3.2'));
		assert.equal('44', NodeABI.getABIVersionByNodeVersion('2.3.1'));
		assert.equal('44', NodeABI.getABIVersionByNodeVersion('2.3.0'));
		assert.equal('44', NodeABI.getABIVersionByNodeVersion('2.2.1'));
		assert.equal('44', NodeABI.getABIVersionByNodeVersion('2.2.0'));
		assert.equal('44', NodeABI.getABIVersionByNodeVersion('2.1.0'));
		assert.equal('44', NodeABI.getABIVersionByNodeVersion('2.0.2'));
		assert.equal('44', NodeABI.getABIVersionByNodeVersion('2.0.1'));
		assert.equal('44', NodeABI.getABIVersionByNodeVersion('2.0.0'));
	});

	it('NODE_MODULE_VERSION: 43', () => {
		assert.equal('43', NodeABI.getABIVersionByNodeVersion('1.8.4'));
		assert.equal('43', NodeABI.getABIVersionByNodeVersion('1.8.3'));
		assert.equal('43', NodeABI.getABIVersionByNodeVersion('1.8.2'));
		assert.equal('43', NodeABI.getABIVersionByNodeVersion('1.8.1'));
		assert.equal('43', NodeABI.getABIVersionByNodeVersion('1.7.1'));
		assert.equal('43', NodeABI.getABIVersionByNodeVersion('1.6.4'));
		assert.equal('43', NodeABI.getABIVersionByNodeVersion('1.6.3'));
		assert.equal('43', NodeABI.getABIVersionByNodeVersion('1.6.2'));
		assert.equal('43', NodeABI.getABIVersionByNodeVersion('1.6.1'));
		assert.equal('43', NodeABI.getABIVersionByNodeVersion('1.6.0'));
		assert.equal('43', NodeABI.getABIVersionByNodeVersion('1.5.1'));
		assert.equal('43', NodeABI.getABIVersionByNodeVersion('1.5.0'));
		assert.equal('43', NodeABI.getABIVersionByNodeVersion('1.4.3'));
		assert.equal('43', NodeABI.getABIVersionByNodeVersion('1.4.2'));
		assert.equal('43', NodeABI.getABIVersionByNodeVersion('1.4.1'));
		assert.equal('43', NodeABI.getABIVersionByNodeVersion('1.3.0'));
		assert.equal('43', NodeABI.getABIVersionByNodeVersion('1.2.0'));
		assert.equal('43', NodeABI.getABIVersionByNodeVersion('1.1.0'));
	});

	it('NODE_MODULE_VERSION: 42', () => {
		assert.equal('42', NodeABI.getABIVersionByNodeVersion('1.0.4'));
		assert.equal('42', NodeABI.getABIVersionByNodeVersion('1.0.3'));
		assert.equal('42', NodeABI.getABIVersionByNodeVersion('1.0.2'));
		assert.equal('42', NodeABI.getABIVersionByNodeVersion('1.0.1'));
		assert.equal('42', NodeABI.getABIVersionByNodeVersion('1.0.0'));
	});

	it('NODE_MODULE_VERSION: 14', () => {
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.12.18'));
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.12.17'));
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.12.16'));
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.12.15'));
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.12.14'));
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.12.13'));
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.12.12'));
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.12.11'));
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.12.10'));
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.12.9'));
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.12.8'));
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.12.7'));
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.12.6'));
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.12.5'));
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.12.4'));
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.12.3'));
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.12.2'));
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.12.1'));
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.12.0'));
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.11.16'));
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.11.15'));
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.11.14'));
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.11.13'));
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.11.12'));
		assert.equal('14', NodeABI.getABIVersionByNodeVersion('0.11.11'));
	});

	it('NODE_MODULE_VERSION: 13', () => {
		assert.equal('13', NodeABI.getABIVersionByNodeVersion('0.11.10'));
		assert.equal('13', NodeABI.getABIVersionByNodeVersion('0.11.9'));
		assert.equal('13', NodeABI.getABIVersionByNodeVersion('0.11.8'));
	});

	it('NODE_MODULE_VERSION: 0x000C', () => {
		assert.equal('0x000C', NodeABI.getABIVersionByNodeVersion('0.11.7'));
		assert.equal('0x000C', NodeABI.getABIVersionByNodeVersion('0.11.6'));
		assert.equal('0x000C', NodeABI.getABIVersionByNodeVersion('0.11.5'));
		assert.equal('0x000C', NodeABI.getABIVersionByNodeVersion('0.11.4'));
		assert.equal('0x000C', NodeABI.getABIVersionByNodeVersion('0.11.3'));
		assert.equal('0x000C', NodeABI.getABIVersionByNodeVersion('0.11.2'));
		assert.equal('0x000C', NodeABI.getABIVersionByNodeVersion('0.11.1'));
		assert.equal('0x000C', NodeABI.getABIVersionByNodeVersion('0.11.0'));
	});

	it('NODE_MODULE_VERSION: 11', () => {
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.48'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.47'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.46'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.45'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.44'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.43'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.42'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.41'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.40'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.39'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.38'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.37'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.36'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.35'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.34'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.33'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.32'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.31'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.30'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.29'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.28'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.27'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.26'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.25'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.24'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.23'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.22'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.21'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.20'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.19'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.18'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.17'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.16'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.15'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.14'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.13'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.12'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.11'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.10'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.9'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.8'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.7'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.6'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.5'));
		assert.equal('11', NodeABI.getABIVersionByNodeVersion('0.10.4'));
	});

	it('NODE_MODULE_VERSION: 0x000B', () => {
		assert.equal('0x000B', NodeABI.getABIVersionByNodeVersion('0.10.3'));
		assert.equal('0x000B', NodeABI.getABIVersionByNodeVersion('0.10.2'));
		assert.equal('0x000B', NodeABI.getABIVersionByNodeVersion('0.10.1'));
		assert.equal('0x000B', NodeABI.getABIVersionByNodeVersion('0.10.0'));
		assert.equal('0x000B', NodeABI.getABIVersionByNodeVersion('0.9.12'));
		assert.equal('0x000B', NodeABI.getABIVersionByNodeVersion('0.9.11'));
		assert.equal('0x000B', NodeABI.getABIVersionByNodeVersion('0.9.10'));
		assert.equal('0x000B', NodeABI.getABIVersionByNodeVersion('0.9.9'));
	});

	it('NODE_MODULE_VERSION: 0x000A', () => {
		assert.equal('0x000A', NodeABI.getABIVersionByNodeVersion('0.9.8'));
		assert.equal('0x000A', NodeABI.getABIVersionByNodeVersion('0.9.7'));
		assert.equal('0x000A', NodeABI.getABIVersionByNodeVersion('0.9.6'));
		assert.equal('0x000A', NodeABI.getABIVersionByNodeVersion('0.9.5'));
		assert.equal('0x000A', NodeABI.getABIVersionByNodeVersion('0.9.4'));
		assert.equal('0x000A', NodeABI.getABIVersionByNodeVersion('0.9.3'));
		assert.equal('0x000A', NodeABI.getABIVersionByNodeVersion('0.9.2'));
		assert.equal('0x000A', NodeABI.getABIVersionByNodeVersion('0.9.1'));
	});

	it('NODE_MODULE_VERSION: 1', () => {
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.9.0'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.28'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.27'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.26'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.25'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.24'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.23'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.22'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.21'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.20'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.19'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.18'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.17'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.16'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.15'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.14'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.13'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.12'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.11'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.10'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.9'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.8'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.7'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.6'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.5'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.4'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.3'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.2'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.1'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.8.0'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.7.12'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.7.11'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.7.10'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.7.9'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.7.8'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.7.7'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.7.6'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.7.5'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.7.4'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.7.3'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.7.2'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.7.1'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.7.0'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.6.21'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.6.20'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.6.19'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.6.18'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.6.17'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.6.16'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.6.15'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.6.14'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.6.13'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.6.12'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.6.11'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.6.10'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.6.9'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.6.8'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.6.7'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.6.6'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.6.5'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.6.4'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.6.3'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.6.2'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.6.1'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.6.0'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.5.10'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.5.9'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.5.8'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.5.7'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.5.6'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.5.5'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.5.4'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.5.3'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.5.2'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.5.1'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.5.0'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.4.12'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.4.11'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.4.10'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.4.9'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.4.8'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.4.7'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.4.6'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.4.5'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.4.4'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.4.3'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.4.2'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.4.1'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.4.0'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.3.8'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.3.7'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.3.6'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.3.5'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.3.4'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.3.3'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.3.2'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.3.1'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.3.0'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.2.6'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.2.5'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.2.4'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.2.3'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.2.2'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.2.1'));
		assert.equal('1', NodeABI.getABIVersionByNodeVersion('0.2.0'));
	});

	it('NODE_MODULE_VERSION: <empty string>', () => {
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.104'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.103'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.102'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.101'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.100'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.99'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.98'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.97'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.96'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.95'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.94'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.93'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.92'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.91'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.90'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.33'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.32'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.31'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.30'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.29'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.28'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.27'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.26'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.25'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.24'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.23'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.22'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.21'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.20'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.19'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.18'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.17'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.16'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.15'));
		assert.equal('', NodeABI.getABIVersionByNodeVersion('0.1.14'));
	});
});