var imgName = {
	1: ['飞吧', '风太大我听不见', '给我好好上课', '乖～', '机智的我已看穿一切',
		'看我可爱吗？', '看我正步走的多好', '鹿子：你们走开', '美女相伴，开心', '女王现，群人臣服',
		'人家在猜拳，你想干嘛？', '同志辛苦了', '未来陆军女将', '熊：你这样举着我好痛苦',
		'一脸不高兴', '移动给了多少广告费你？', '广州广州，快上车', '功夫熊猫：你的姿势不对', '好舍友', '后面妹纸：别拍，等我带上口罩', '可以，画面很美',
		'厉害，请收下我的膝盖', '美美哒', '美女一枚', '你又翻墙出外面玩了？', '生日快乐',
		'生日快乐２', '树爷爷：你好重，快下来', '一对好姐妹', '中间那排，第三位同学请起来回答问题',
		'大海，绽放自由', '党的宗旨是一切为人民服务（所以我的外卖是不是可以交给你了？）', '钢琴老师好', '好惬意', '黄胖子! ! !',
		'耶～', '举起手来', '来，看镜头', '美女，时隔一年，你又来了', '你应该面朝大海，来,在拍一次',
		'傻乎乎', '哇，哪里？好想去', '哇哦，好好玩的样子', '我们来玩足球吧', '嘻嘻，久别重逢',
		'耶，可爱的笑脸', '衣服和场合很搭调nice', '这是谁？认出有奖'
	]
}

// var i2 = ['广州广州，快上车', '功夫熊猫：你的姿势不对', '好舍友', '后面妹纸：别拍，等我带上口罩', '可以，画面很美',
// 	'厉害，请收下我的膝盖', '美美哒', '美女一枚', '你又翻墙出外面玩了？', '生日快乐',
// 	'生日快乐２', '树爷爷：你好重，快下来', '一对好姐妹', '中间那排，第三位同学请起来回答问题'
// ];
// let i3 = ['大海，绽放自由', '党的宗旨是一切为人民服务（所以我的外卖是不是可以交给你了？）', '钢琴老师好', '好惬意', '黄胖子! ! !',
// 	'耶～', '举起手来', '来，看镜头', '美女，时隔一年，你又来了', '你应该面朝大海，来,在拍一次',
// 	'傻乎乎', '哇，哪里？好想去', '哇哦，好好玩的样子', '我们来玩足球吧', '嘻嘻，久别重逢',
// 	'耶，可爱的笑脸', '衣服和场合很搭调nice', '这是谁？认出有奖'
// ];

function randomBackground() {
	var couleurFond;
	var numFond = Math.floor((Math.random() * 10) + 1);
	switch (numFond) {
		case 1:
			couleurFond = "#16a085";
			break;
		case 2:
			couleurFond = "#27ae60";
			break;
		case 3:
			couleurFond = "#2980b9";
			break;
		case 4:
			couleurFond = "#8e44ad";
			break;
		case 5:
			couleurFond = "#2c3e50";
			break;
		case 6:
			couleurFond = "#f39c12";
			break;
		case 7:
			couleurFond = "#d35400";
			break;
		case 8:
			couleurFond = "#c0392b";
			break;
		case 9:
			couleurFond = "#bdc3c7";
			break;
		case 10:
			couleurFond = "#7f8c8d";
			break;
	}
	return couleurFond;
}


function changeCouleur() {
	var tabNum = [];
	while (tabNum.length < 4) {
		var numSlime = Math.floor((Math.random() * 10) + 1);
		if (tabNum.indexOf(numSlime) == -1) {
			tabNum.push(numSlime);
		}
	}

	for (var i = 0; i < 4; i++) {
		var couleurSlime;
		var corpsSlime = document.getElementsByClassName("corps");

		switch (tabNum[i]) {
			case 1:
				couleurSlime = "#1abc9c";
				break;
			case 2:
				couleurSlime = "#2ecc71";
				break;
			case 3:
				couleurSlime = "#3498db";
				break;
			case 4:
				couleurSlime = "#9b59b6";
				break;
			case 5:
				couleurSlime = "#34495e";
				break;
			case 6:
				couleurSlime = "#f1c40f";
				break;
			case 7:
				couleurSlime = "#e67e22";
				break;
			case 8:
				couleurSlime = "#e74c3c";
				break;
			case 9:
				couleurSlime = "#ecf0f1";
				break;
			case 10:
				couleurSlime = "#95a5a6";
				break;
		}
		corpsSlime[i].style.fill = couleurSlime;
	}
}


var Vector = function (x, y) {
	this.x = x || 0;
	this.y = y || 0;
};

Vector.prototype = {
	add: function (v) {
		this.x += v.x;
		this.y += v.y;
		return this;
	},

	length: function () {
		return Math.sqrt(this.x * this.x + this.y * this.y);
	},

	rotate: function (theta) {
		var x = this.x;
		var y = this.y;
		this.x = Math.cos(theta) * this.x - Math.sin(theta) * this.y;
		this.y = Math.sin(theta) * this.x + Math.cos(theta) * this.y;

		return this;
	},

	mult: function (f) {
		this.x *= f;
		this.y *= f;
		return this;
	}

};

var Leaf = function (p, r, c, ctx) {
	this.p = p || null;
	this.r = r || 0;
	this.c = c || 'rgba(255,255,255,1.0)';
	this.ctx = ctx;

}

Leaf.prototype = {

	render: function () {
		var that = this;
		var ctx = this.ctx;
		var f = Branch.random(1, 2)

		for (var i = 0; i < 5; i++) {
			(function (r) {
				setTimeout(function () {
					ctx.beginPath();
					ctx.fillStyle = that.color;
					ctx.moveTo(that.p.x, that.p.y);
					ctx.arc(that.p.x, that.p.y, r, 0, Branch.circle, true);
					ctx.fill();
				}, r * 60);

			})(i);
		}
	}
}

var Branch = function (p, v, r, c, t) {
	this.p = p || null;
	this.v = v || null;
	this.r = r || 0;
	this.length = 0;
	this.generation = 1;
	this.tree = t || null;
	this.color = c || 'rgba(255,255,255,1.0)';
	this.register();

};

Branch.prototype = {

	register: function () {
		this.tree.addBranch(this);
	},

	draw: function () {
		var ctx = this.tree.ctx;
		ctx.beginPath();
		ctx.fillStyle = this.color;
		ctx.moveTo(this.p.x, this.p.y);
		ctx.arc(this.p.x, this.p.y, this.r, 0, Branch.circle, true);
		ctx.fill();
	},

	modify: function () {
		var angle = 0.2 - (0.2 / this.generation);

		this.p.add(this.v);
		this.length += this.v.length();
		this.r *= 0.99;
		this.v.rotate(Branch.random(-angle, angle)); //.mult(0.996);

		if (this.r < 0.8 || this.generation > 10) {
			this.tree.removeBranch(this);
			var l = new Leaf(this.p, 10, this.color, this.tree.ctx);
			l.render();
		}
	},

	grow: function () {
		this.draw();
		this.modify();
		this.fork();
	},

	fork: function () {
		var p = this.length - Branch.random(90, 180); // + (this.generation * 10);

		if (p > 0) {
			var n = Math.round(Branch.random(1, 5));
			this.tree.stat.fork += n - 1;
			for (var i = 0; i < n; i++) {
				Branch.clone(this);
			}

			this.tree.removeBranch(this);
		}
	}
};

Branch.circle = 2 * Math.PI;
Branch.random = function (min, max) {
	return Math.random() * (max - min) + min;
};

Branch.clone = function (b) {
	var r = new Branch(new Vector(b.p.x, b.p.y), new Vector(b.v.x, b.v.y), b.r, b.color, b.tree);
	r.generation = b.generation + 1;
	return r;
};

Branch.rgba = function (r, g, b, a) {

	return 'rgba(' + r + ',' + g + ',' + b + ',' + a + ')';

};

Branch.randomrgba = function (min, max, a) {

	return Branch.rgba(Math.round(Branch.random(min, max)), Math.round(Branch.random(min, max)), Math.round(Branch.random(
		min, max)), a);

};

var Tree = function () {
	var branches = [];
	var timer;

	this.stat = {
		fork: 0,
		length: 0
	};

	this.addBranch = function (b) {
		branches.push(b);
	};

	this.removeBranch = function (b) {
		for (var i = 0; i < branches.length; i++) {
			if (branches[i] === b) {
				branches.splice(i, 1);
				return;
			}
		}
	};

	this.render = function (fn) {
		var that = this;
		timer = setInterval(function () {
			fn.apply(that, arguments);

			if (branches.length > 0) {
				for (var i = 0; i < branches.length; i++) {
					branches[i].grow();
				}
			} else {
				clearInterval(timer);
			}

		}, 1000 / 30);
	};

	this.init = function (ctx) {
		this.ctx = ctx;
	};

	this.abort = function () {
		branches = [];
		this.stat = {
			fork: 0,
			length: 0
		}
	};
};


var Fireworks = function () {
	var self = this;
	var rand = function (rMi, rMa) {
		return ~~((Math.random() * (rMa - rMi + 1)) + rMi);
	}
	var hitTest = function (x1, y1, w1, h1, x2, y2, w2, h2) {
		return !(x1 + w1 < x2 || x2 + w2 < x1 || y1 + h1 < y2 || y2 + h2 < y1);
	};
	window.requestAnimFrame = function () {
		return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window
			.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame ||
			function (a) {
				window.setTimeout(a, 1E3 / 60)
			}
	}();

	self.init = function () {
		self.canvas = document.createElement('canvas');
		$(self.canvas).addClass('fireworks');
		self.canvas.width = self.cw = $(window).innerWidth();
		self.canvas.height = self.ch = $(window).innerHeight();
		self.particles = [];
		self.partCount = 150;
		self.fireworks = [];
		self.mx = self.cw / 2;
		self.my = self.ch / 2;
		self.currentHue = 30;
		self.partSpeed = 5;
		self.partSpeedVariance = 10;
		self.partWind = 50;
		self.partFriction = 5;
		self.partGravity = 1;
		self.hueMin = 0;
		self.hueMax = 360;
		self.fworkSpeed = 4;
		self.fworkAccel = 10;
		self.hueVariance = 30;
		self.flickerDensity = 25;
		self.showShockwave = true;
		self.showTarget = false;
		self.clearAlpha = 25;

		$(document.body).append(self.canvas);
		self.ctx = self.canvas.getContext('2d');
		self.ctx.lineCap = 'round';
		self.ctx.lineJoin = 'round';
		self.lineWidth = 1;
		self.bindEvents();
		self.canvasLoop();

		self.canvas.onselectstart = function () {
			return false;
		};
	};

	self.createParticles = function (x, y, hue) {
		var countdown = self.partCount;
		while (countdown--) {
			var newParticle = {
				x: x,
				y: y,
				coordLast: [{
						x: x,
						y: y
					},
					{
						x: x,
						y: y
					},
					{
						x: x,
						y: y
					}
				],
				angle: rand(0, 360),
				speed: rand(((self.partSpeed - self.partSpeedVariance) <= 0) ? 1 : self
					.partSpeed - self.partSpeedVariance, (self.partSpeed + self.partSpeedVariance)
				),
				friction: 1 - self.partFriction / 100,
				gravity: self.partGravity / 2,
				hue: rand(hue - self.hueVariance, hue + self.hueVariance),
				brightness: rand(50, 80),
				alpha: rand(40, 100) / 100,
				decay: rand(10, 50) / 1000,
				wind: (rand(0, self.partWind) - (self.partWind / 2)) / 25,
				lineWidth: self.lineWidth
			};
			self.particles.push(newParticle);
		}
	};


	self.updateParticles = function () {
		var i = self.particles.length;
		while (i--) {
			var p = self.particles[i];
			var radians = p.angle * Math.PI / 180;
			var vx = Math.cos(radians) * p.speed;
			var vy = Math.sin(radians) * p.speed;
			p.speed *= p.friction;

			p.coordLast[2].x = p.coordLast[1].x;
			p.coordLast[2].y = p.coordLast[1].y;
			p.coordLast[1].x = p.coordLast[0].x;
			p.coordLast[1].y = p.coordLast[0].y;
			p.coordLast[0].x = p.x;
			p.coordLast[0].y = p.y;

			p.x += vx;
			p.y += vy;
			p.y += p.gravity;

			p.angle += p.wind;
			p.alpha -= p.decay;

			if (!hitTest(0, 0, self.cw, self.ch, p.x - p.radius, p.y - p.radius, p.radius *
					2, p.radius * 2) || p.alpha < .05) {
				self.particles.splice(i, 1);
			}
		};
	};

	self.drawParticles = function () {
		var i = self.particles.length;
		while (i--) {
			var p = self.particles[i];

			var coordRand = (rand(1, 3) - 1);
			self.ctx.beginPath();
			self.ctx.moveTo(Math.round(p.coordLast[coordRand].x), Math.round(p.coordLast[
				coordRand].y));
			self.ctx.lineTo(Math.round(p.x), Math.round(p.y));
			self.ctx.closePath();
			self.ctx.strokeStyle = 'hsla(' + p.hue + ', 100%, ' + p.brightness + '%, ' + p.alpha +
				')';
			self.ctx.stroke();

			if (self.flickerDensity > 0) {
				var inverseDensity = 50 - self.flickerDensity;
				if (rand(0, inverseDensity) === inverseDensity) {
					self.ctx.beginPath();
					self.ctx.arc(Math.round(p.x), Math.round(p.y), rand(p.lineWidth, p.lineWidth +
						3) / 2, 0, Math.PI * 2, false)
					self.ctx.closePath();
					var randAlpha = rand(50, 100) / 100;
					self.ctx.fillStyle = 'hsla(' + p.hue + ', 100%, ' + p.brightness +
						'%, ' + randAlpha + ')';
					self.ctx.fill();
				}
			}
		};
	};


	self.createFireworks = function (startX, startY, targetX, targetY) {
		var newFirework = {
			x: startX,
			y: startY,
			startX: startX,
			startY: startY,
			hitX: false,
			hitY: false,
			coordLast: [{
					x: startX,
					y: startY
				},
				{
					x: startX,
					y: startY
				},
				{
					x: startX,
					y: startY
				}
			],
			targetX: targetX,
			targetY: targetY,
			speed: self.fworkSpeed,
			angle: Math.atan2(targetY - startY, targetX - startX),
			shockwaveAngle: Math.atan2(targetY - startY, targetX - startX) + (90 * (
				Math.PI / 180)),
			acceleration: self.fworkAccel / 100,
			hue: self.currentHue,
			brightness: rand(50, 80),
			alpha: rand(50, 100) / 100,
			lineWidth: self.lineWidth
		};
		self.fireworks.push(newFirework);

	};


	self.updateFireworks = function () {
		var i = self.fireworks.length;

		while (i--) {
			var f = self.fireworks[i];
			self.ctx.lineWidth = f.lineWidth;

			vx = Math.cos(f.angle) * f.speed,
				vy = Math.sin(f.angle) * f.speed;
			f.speed *= 1 + f.acceleration;
			f.coordLast[2].x = f.coordLast[1].x;
			f.coordLast[2].y = f.coordLast[1].y;
			f.coordLast[1].x = f.coordLast[0].x;
			f.coordLast[1].y = f.coordLast[0].y;
			f.coordLast[0].x = f.x;
			f.coordLast[0].y = f.y;

			if (f.startX >= f.targetX) {
				if (f.x + vx <= f.targetX) {
					f.x = f.targetX;
					f.hitX = true;
				} else {
					f.x += vx;
				}
			} else {
				if (f.x + vx >= f.targetX) {
					f.x = f.targetX;
					f.hitX = true;
				} else {
					f.x += vx;
				}
			}

			if (f.startY >= f.targetY) {
				if (f.y + vy <= f.targetY) {
					f.y = f.targetY;
					f.hitY = true;
				} else {
					f.y += vy;
				}
			} else {
				if (f.y + vy >= f.targetY) {
					f.y = f.targetY;
					f.hitY = true;
				} else {
					f.y += vy;
				}
			}

			if (f.hitX && f.hitY) {
				self.createParticles(f.targetX, f.targetY, f.hue);
				self.fireworks.splice(i, 1);

			}
		};
	};

	self.drawFireworks = function () {
		var i = self.fireworks.length;
		self.ctx.globalCompositeOperation = 'lighter';
		while (i--) {
			var f = self.fireworks[i];
			self.ctx.lineWidth = f.lineWidth;

			var coordRand = (rand(1, 3) - 1);
			self.ctx.beginPath();
			self.ctx.moveTo(Math.round(f.coordLast[coordRand].x), Math.round(f.coordLast[
				coordRand].y));
			self.ctx.lineTo(Math.round(f.x), Math.round(f.y));
			self.ctx.closePath();
			self.ctx.strokeStyle = 'hsla(' + f.hue + ', 100%, ' + f.brightness + '%, ' + f.alpha +
				')';
			self.ctx.stroke();

			if (self.showTarget) {
				self.ctx.save();
				self.ctx.beginPath();
				self.ctx.arc(Math.round(f.targetX), Math.round(f.targetY), rand(1, 8), 0,
					Math.PI * 2, false)
				self.ctx.closePath();
				self.ctx.lineWidth = 1;
				self.ctx.stroke();
				self.ctx.restore();
			}

			if (self.showShockwave) {
				self.ctx.save();
				self.ctx.translate(Math.round(f.x), Math.round(f.y));
				self.ctx.rotate(f.shockwaveAngle);
				self.ctx.beginPath();
				self.ctx.arc(0, 0, 1 * (f.speed / 5), 0, Math.PI, true);
				self.ctx.strokeStyle = 'hsla(' + f.hue + ', 100%, ' + f.brightness + '%, ' +
					rand(25, 60) / 100 + ')';
				self.ctx.lineWidth = f.lineWidth;
				self.ctx.stroke();
				self.ctx.restore();
			}
		};
	};

	self.bindEvents = function () {
		$(window).on('resize', function () {
			clearTimeout(self.timeout);
			self.timeout = setTimeout(function () {
				self.canvas.width = self.cw = $(window).innerWidth();
				self.canvas.height = self.ch = $(window).innerHeight();
				self.ctx.lineCap = 'round';
				self.ctx.lineJoin = 'round';
			}, 100);
		});

		$(self.canvas).on('mousedown', function (e) {
			self.mx = e.pageX - self.canvas.offsetLeft;
			self.my = e.pageY - self.canvas.offsetTop;
			self.currentHue = rand(self.hueMin, self.hueMax);
			self.createFireworks(self.cw / 2, self.ch, self.mx, self.my);

			$(self.canvas).on('mousemove.fireworks', function (e) {
				self.mx = e.pageX - self.canvas.offsetLeft;
				self.my = e.pageY - self.canvas.offsetTop;
				self.currentHue = rand(self.hueMin, self.hueMax);
				self.createFireworks(self.cw / 2, self.ch, self.mx, self.my);
			});
		});

		$(self.canvas).on('mouseup', function (e) {
			$(self.canvas).off('mousemove.fireworks');
		});

	}

	self.clear = function () {
		self.particles = [];
		self.fireworks = [];
		self.ctx.clearRect(0, 0, self.cw, self.ch);
	};


	self.canvasLoop = function () {
		requestAnimFrame(self.canvasLoop, self.canvas);
		self.ctx.globalCompositeOperation = 'destination-out';
		self.ctx.fillStyle = 'rgba(0,0,0,' + self.clearAlpha / 100 + ')';
		self.ctx.fillRect(0, 0, self.cw, self.ch);
		self.updateFireworks();
		self.updateParticles();
		self.drawFireworks();
		self.drawParticles();

	};

	self.init();

}

//　展示图片
function showImg() {
	if (imgName[1].length > 0) {
		let name = imgName[1].shift();
		$(".show-content img").eq(0).attr('src', './img/1/' + name + '.png');
		$(".show-content span").eq(0).text(name);

		$(".show-content").addClass('show-animation');

		setTimeout(function () {
			$(".show-content").removeClass('show-animation');
		}, 4900);
		setTimeout(function () {
			showImg()
		}, 5000);
	} else {
		//放烟花
		showFireworks();

		// 伸展背景
		console.log(fillStyle);
		stretchBackground();
	}
}

// 放烟花
function showFireworks() {
	var fworks = new Fireworks();
	for (var i = 0; i < 50; ++i) {
		let mx = Branch.random(0, window.innerWidth);
		let my = Branch.random(0, 200);
		fworks.createFireworks(fworks.cw / 2, fworks.ch, mx, my);
	}
	// setInterval(function () {
	// 	var count = Branch.random(0, 8);
	// 	for (var i = 0; i < count; ++i) {
	// 		let mx = Branch.random(0, window.innerWidth);
	// 		let my = Branch.random(0, 200);
	// 		fworks.createFireworks(fworks.cw / 2, fworks.ch, mx, my);
	// 	}
	// }, 1000)
}

function drawBackground(scale) {
	ctx.fillStyle = fillStyle;
	ctx.beginPath();
	ctx.moveTo(0, canvas.height);
	ctx.lineTo(400 * scale, canvas.height - 130 * scale);
	ctx.lineTo(canvas.width - 450 * scale, canvas.height - 130 * scale);
	ctx.lineTo(canvas.width, canvas.height);
	ctx.lineTo(0, canvas.height)
	ctx.closePath();
	ctx.fill();
}

function drawTree() {
	ctx.globalCompositeOperation = "lighter";
	var center_x = canvas.width / 2;
	var stretch_factor = 600 / canvas.height;
	var y_speed = 2 / stretch_factor;

	var t = new Tree();
	t.init(ctx);

	for (var i = 0; i < 3; i++) {
		new Branch(new Vector(center_x, canvas.height - 200), new Vector(Math.random(0.5, 0.5), -y_speed), 20 / stretch_factor,
			Branch.randomrgba(0, 255, 0.2), t);
	}

	t.render(function () {
		console.log(this.stat.fork)
	});

	setTimeout(function () {
		$('.wrap').css({
			opacity: 1
		})
	}, 8000);
}

function stretchBackground() {
	var scale = 1;
	var stop = setInterval(function () {
		scale += 0.005;
		drawBackground(scale);　　
		if (scale >= 1.40) {
			clearInterval(stop);
			drawTree();
		}
	}, 80);
}

var canvas;
var ctx;
var fillStyle = randomBackground();
$(function () {
	var $window = $(window);
	canvas = $('#canvas')[0];
	canvas.width = $window.width();
	canvas.height = $window.height();
	ctx = canvas.getContext("2d");
	drawBackground(1);

	showImg();
	changeCouleur();
});