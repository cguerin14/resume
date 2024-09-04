// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles
parcelRequire = (function (modules, cache, entry, globalName) {
  // Save the require from previous bundle to this closure if any
  var previousRequire = typeof parcelRequire === 'function' && parcelRequire;
  var nodeRequire = typeof require === 'function' && require;

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire = typeof parcelRequire === 'function' && parcelRequire;
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error('Cannot find module \'' + name + '\'');
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = cache[name] = new newRequire.Module(name);

      modules[name][0].call(module.exports, localRequire, module, module.exports, this);
    }

    return cache[name].exports;

    function localRequire(x){
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x){
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [function (require, module) {
      module.exports = exports;
    }, {}];
  };

  var error;
  for (var i = 0; i < entry.length; i++) {
    try {
      newRequire(entry[i]);
    } catch (e) {
      // Save first error but execute all entries
      if (!error) {
        error = e;
      }
    }
  }

  if (entry.length) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(entry[entry.length - 1]);

    // CommonJS
    if (typeof exports === "object" && typeof module !== "undefined") {
      module.exports = mainExports;

    // RequireJS
    } else if (typeof define === "function" && define.amd) {
     define(function () {
       return mainExports;
     });

    // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }

  // Override the current require with this new one
  parcelRequire = newRequire;

  if (error) {
    // throw error from earlier, _after updating parcelRequire_
    throw error;
  }

  return newRequire;
})({"i96L":[function(require,module,exports) {
module.exports = [{
  "command": "help",
  "responseType": "list",
  "value": ["<code>about</code> : Afficher les informations me concernant.", "<code>experiences</code> : Afficher la liste de mes expériences.", "<code>resume</code> : Télécharger le CV.", "<code>picture</code> : Afficher ma photo de profil.", "<code>help</code> : Afficher l'aide.", "<code>clear</code> : Nettoyer le terminal.", "<code>dark/light</code> : Change le thème de la page.", "<em>Vous pouvez utiliser la touche TAB afin de compléter une commande</em>.", "<em>Vous pouvez retrouver les anciennes commandes avec les flèches haut et bas.</em>"]
}, {
  "command": "about",
  "responseType": "code",
  "value": ["{", "   \"nom\" : \"Clément GUERIN\",", "   \"poste\" : \"Développeur back-end\",", "   \"experience\" : \"5 ans\",", "   \"ville\" : \"Bordeaux, France\"", "}"]
}, {
  "command": "experiences",
  "responseType": "table",
  "headers": ["Date", "Client", "Description", "Technologies"],
  "rows": [["08/2022<br/>07/2024", "<em>Banque Nationale du Canada</em><br/>Montréal, Québec", "Développer des microservices Java | Spring Boot<br/>Utiliser des pipelines CI/CD Jenkins et Github Actions<br/>Déployer sur AWS<br/>Utiliser le BDD avec une pyramide de tests très structurée<br/>Interagir quotidiennement avec les frameworks standards de l’industrie : Maven | Cucumber | Junit | Mockito | PIT Mutation Testing | Kafka | OpenAPI | Hibernate | OpenFeign | Nexus<br/>Interagir quotidiennement avec les softwares standards de l’industrie : Jira | Confluence | Splunk | Datadog | Bitbucket | Github<br/>Gestion de la propreté du code à l’aide de SonarQube<br/>Participer à la revue de code et assurer le respect des pratiques d'équipe<br/>Être un membre actif lors des différentes cérémonies impliquées par le cadre méthodologique Scrum", "Spring<br/>Java<br/>Github<br/>Jenkins<br/>AWS"], ["03/2021<br/>08/2022", "<em>Consultant CGI</em><br/>Montréal, Québec", "Développer des microservices Java | Spring Boot<br/>Créer des pipelines CI/CD Concourse<br/>Déployer sur la plateforme Pivotal Cloud Foundry<br/>Rédiger des contrats OpenAPI via les outils Swagger<br/>Participer activement à la préparation des colis et aux mises en production<br/>Interagir quotidiennement avec les frameworks standards de l’industrie : Gradle | Junit | Mockito | OpenAPI | Hibernate | OpenFeign | Artifactory<br/>Interagir quotidiennement avec les softwares standards de l’industrie : Jira | Confluence | Splunk | Bitbucket<br/>Gestion de la propreté du code à l’aide de SonarQube<br/>Participer à la revue de code et assurer le respect des pratiques d’équipe<br/>Être un membre actif lors des différentes cérémonies impliquées par le cadre méthodologique Scrum", "Spring<br/>Java<br/>Github<br/>Concourse<br/>Pivotal CF"], ["03/2019<br/>12/2020", "<em>Consultant CGI</em><br/>Toulouse", "Développer un BFF Java | Spring Boot<br/>Développer une SPA Angular<br/>Interagir quotidiennement avec les frameworks standards de l’industrie : Maven | Junit | Mockito | Hibernate<br/>Interagir quotidiennement avec les softwares standards de l’industrie : Jira | Confluence | Github<br/>Participer à la revue de code et assurer le respect des pratiques d’équipe<br/>Être un membre actif lors des différentes cérémonies impliquées par le cadre méthodologique Scrum", "Spring<br/>Java<br/>Angular<br/>Github<br/>Jenkins"]]
}];
},{}],"YvuL":[function(require,module,exports) {
var global = arguments[3];
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.create = void 0;
// canvas-confetti v1.5.1 built on 2022-02-08T22:20:40.944Z
var _module = {};

// source content
(function main(global, module, isWorker, workerSize) {
  var canUseWorker = !!(global.Worker && global.Blob && global.Promise && global.OffscreenCanvas && global.OffscreenCanvasRenderingContext2D && global.HTMLCanvasElement && global.HTMLCanvasElement.prototype.transferControlToOffscreen && global.URL && global.URL.createObjectURL);
  function noop() {}

  // create a promise if it exists, otherwise, just
  // call the function directly
  function promise(func) {
    var ModulePromise = module.exports.Promise;
    var Prom = ModulePromise !== void 0 ? ModulePromise : global.Promise;
    if (typeof Prom === 'function') {
      return new Prom(func);
    }
    func(noop, noop);
    return null;
  }
  var raf = function () {
    var TIME = Math.floor(1000 / 60);
    var frame, cancel;
    var frames = {};
    var lastFrameTime = 0;
    if (typeof requestAnimationFrame === 'function' && typeof cancelAnimationFrame === 'function') {
      frame = function (cb) {
        var id = Math.random();
        frames[id] = requestAnimationFrame(function onFrame(time) {
          if (lastFrameTime === time || lastFrameTime + TIME - 1 < time) {
            lastFrameTime = time;
            delete frames[id];
            cb();
          } else {
            frames[id] = requestAnimationFrame(onFrame);
          }
        });
        return id;
      };
      cancel = function (id) {
        if (frames[id]) {
          cancelAnimationFrame(frames[id]);
        }
      };
    } else {
      frame = function (cb) {
        return setTimeout(cb, TIME);
      };
      cancel = function (timer) {
        return clearTimeout(timer);
      };
    }
    return {
      frame: frame,
      cancel: cancel
    };
  }();
  var getWorker = function () {
    var worker;
    var prom;
    var resolves = {};
    function decorate(worker) {
      function execute(options, callback) {
        worker.postMessage({
          options: options || {},
          callback: callback
        });
      }
      worker.init = function initWorker(canvas) {
        var offscreen = canvas.transferControlToOffscreen();
        worker.postMessage({
          canvas: offscreen
        }, [offscreen]);
      };
      worker.fire = function fireWorker(options, size, done) {
        if (prom) {
          execute(options, null);
          return prom;
        }
        var id = Math.random().toString(36).slice(2);
        prom = promise(function (resolve) {
          function workerDone(msg) {
            if (msg.data.callback !== id) {
              return;
            }
            delete resolves[id];
            worker.removeEventListener('message', workerDone);
            prom = null;
            done();
            resolve();
          }
          worker.addEventListener('message', workerDone);
          execute(options, id);
          resolves[id] = workerDone.bind(null, {
            data: {
              callback: id
            }
          });
        });
        return prom;
      };
      worker.reset = function resetWorker() {
        worker.postMessage({
          reset: true
        });
        for (var id in resolves) {
          resolves[id]();
          delete resolves[id];
        }
      };
    }
    return function () {
      if (worker) {
        return worker;
      }
      if (!isWorker && canUseWorker) {
        var code = ['var CONFETTI, SIZE = {}, module = {};', '(' + main.toString() + ')(this, module, true, SIZE);', 'onmessage = function(msg) {', '  if (msg.data.options) {', '    CONFETTI(msg.data.options).then(function () {', '      if (msg.data.callback) {', '        postMessage({ callback: msg.data.callback });', '      }', '    });', '  } else if (msg.data.reset) {', '    CONFETTI.reset();', '  } else if (msg.data.resize) {', '    SIZE.width = msg.data.resize.width;', '    SIZE.height = msg.data.resize.height;', '  } else if (msg.data.canvas) {', '    SIZE.width = msg.data.canvas.width;', '    SIZE.height = msg.data.canvas.height;', '    CONFETTI = module.exports.create(msg.data.canvas);', '  }', '}'].join('\n');
        try {
          worker = new Worker(URL.createObjectURL(new Blob([code])));
        } catch (e) {
          // eslint-disable-next-line no-console
          typeof console !== undefined && typeof console.warn === 'function' ? console.warn('🎊 Could not load worker', e) : null;
          return null;
        }
        decorate(worker);
      }
      return worker;
    };
  }();
  var defaults = {
    particleCount: 50,
    angle: 90,
    spread: 45,
    startVelocity: 45,
    decay: 0.9,
    gravity: 1,
    drift: 0,
    ticks: 200,
    x: 0.5,
    y: 0.5,
    shapes: ['square', 'circle'],
    zIndex: 100,
    colors: ['#26ccff', '#a25afd', '#ff5e7e', '#88ff5a', '#fcff42', '#ffa62d', '#ff36ff'],
    // probably should be true, but back-compat
    disableForReducedMotion: false,
    scalar: 1
  };
  function convert(val, transform) {
    return transform ? transform(val) : val;
  }
  function isOk(val) {
    return !(val === null || val === undefined);
  }
  function prop(options, name, transform) {
    return convert(options && isOk(options[name]) ? options[name] : defaults[name], transform);
  }
  function onlyPositiveInt(number) {
    return number < 0 ? 0 : Math.floor(number);
  }
  function randomInt(min, max) {
    // [min, max)
    return Math.floor(Math.random() * (max - min)) + min;
  }
  function toDecimal(str) {
    return parseInt(str, 16);
  }
  function colorsToRgb(colors) {
    return colors.map(hexToRgb);
  }
  function hexToRgb(str) {
    var val = String(str).replace(/[^0-9a-f]/gi, '');
    if (val.length < 6) {
      val = val[0] + val[0] + val[1] + val[1] + val[2] + val[2];
    }
    return {
      r: toDecimal(val.substring(0, 2)),
      g: toDecimal(val.substring(2, 4)),
      b: toDecimal(val.substring(4, 6))
    };
  }
  function getOrigin(options) {
    var origin = prop(options, 'origin', Object);
    origin.x = prop(origin, 'x', Number);
    origin.y = prop(origin, 'y', Number);
    return origin;
  }
  function setCanvasWindowSize(canvas) {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
  }
  function setCanvasRectSize(canvas) {
    var rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;
  }
  function getCanvas(zIndex) {
    var canvas = document.createElement('canvas');
    canvas.style.position = 'fixed';
    canvas.style.top = '0px';
    canvas.style.left = '0px';
    canvas.style.pointerEvents = 'none';
    canvas.style.zIndex = zIndex;
    return canvas;
  }
  function ellipse(context, x, y, radiusX, radiusY, rotation, startAngle, endAngle, antiClockwise) {
    context.save();
    context.translate(x, y);
    context.rotate(rotation);
    context.scale(radiusX, radiusY);
    context.arc(0, 0, 1, startAngle, endAngle, antiClockwise);
    context.restore();
  }
  function randomPhysics(opts) {
    var radAngle = opts.angle * (Math.PI / 180);
    var radSpread = opts.spread * (Math.PI / 180);
    return {
      x: opts.x,
      y: opts.y,
      wobble: Math.random() * 10,
      wobbleSpeed: Math.min(0.11, Math.random() * 0.1 + 0.05),
      velocity: opts.startVelocity * 0.5 + Math.random() * opts.startVelocity,
      angle2D: -radAngle + (0.5 * radSpread - Math.random() * radSpread),
      tiltAngle: (Math.random() * (0.75 - 0.25) + 0.25) * Math.PI,
      color: opts.color,
      shape: opts.shape,
      tick: 0,
      totalTicks: opts.ticks,
      decay: opts.decay,
      drift: opts.drift,
      random: Math.random() + 2,
      tiltSin: 0,
      tiltCos: 0,
      wobbleX: 0,
      wobbleY: 0,
      gravity: opts.gravity * 3,
      ovalScalar: 0.6,
      scalar: opts.scalar
    };
  }
  function updateFetti(context, fetti) {
    fetti.x += Math.cos(fetti.angle2D) * fetti.velocity + fetti.drift;
    fetti.y += Math.sin(fetti.angle2D) * fetti.velocity + fetti.gravity;
    fetti.wobble += fetti.wobbleSpeed;
    fetti.velocity *= fetti.decay;
    fetti.tiltAngle += 0.1;
    fetti.tiltSin = Math.sin(fetti.tiltAngle);
    fetti.tiltCos = Math.cos(fetti.tiltAngle);
    fetti.random = Math.random() + 2;
    fetti.wobbleX = fetti.x + 10 * fetti.scalar * Math.cos(fetti.wobble);
    fetti.wobbleY = fetti.y + 10 * fetti.scalar * Math.sin(fetti.wobble);
    var progress = fetti.tick++ / fetti.totalTicks;
    var x1 = fetti.x + fetti.random * fetti.tiltCos;
    var y1 = fetti.y + fetti.random * fetti.tiltSin;
    var x2 = fetti.wobbleX + fetti.random * fetti.tiltCos;
    var y2 = fetti.wobbleY + fetti.random * fetti.tiltSin;
    context.fillStyle = 'rgba(' + fetti.color.r + ', ' + fetti.color.g + ', ' + fetti.color.b + ', ' + (1 - progress) + ')';
    context.beginPath();
    if (fetti.shape === 'circle') {
      context.ellipse ? context.ellipse(fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI) : ellipse(context, fetti.x, fetti.y, Math.abs(x2 - x1) * fetti.ovalScalar, Math.abs(y2 - y1) * fetti.ovalScalar, Math.PI / 10 * fetti.wobble, 0, 2 * Math.PI);
    } else {
      context.moveTo(Math.floor(fetti.x), Math.floor(fetti.y));
      context.lineTo(Math.floor(fetti.wobbleX), Math.floor(y1));
      context.lineTo(Math.floor(x2), Math.floor(y2));
      context.lineTo(Math.floor(x1), Math.floor(fetti.wobbleY));
    }
    context.closePath();
    context.fill();
    return fetti.tick < fetti.totalTicks;
  }
  function animate(canvas, fettis, resizer, size, done) {
    var animatingFettis = fettis.slice();
    var context = canvas.getContext('2d');
    var animationFrame;
    var destroy;
    var prom = promise(function (resolve) {
      function onDone() {
        animationFrame = destroy = null;
        context.clearRect(0, 0, size.width, size.height);
        done();
        resolve();
      }
      function update() {
        if (isWorker && !(size.width === workerSize.width && size.height === workerSize.height)) {
          size.width = canvas.width = workerSize.width;
          size.height = canvas.height = workerSize.height;
        }
        if (!size.width && !size.height) {
          resizer(canvas);
          size.width = canvas.width;
          size.height = canvas.height;
        }
        context.clearRect(0, 0, size.width, size.height);
        animatingFettis = animatingFettis.filter(function (fetti) {
          return updateFetti(context, fetti);
        });
        if (animatingFettis.length) {
          animationFrame = raf.frame(update);
        } else {
          onDone();
        }
      }
      animationFrame = raf.frame(update);
      destroy = onDone;
    });
    return {
      addFettis: function (fettis) {
        animatingFettis = animatingFettis.concat(fettis);
        return prom;
      },
      canvas: canvas,
      promise: prom,
      reset: function () {
        if (animationFrame) {
          raf.cancel(animationFrame);
        }
        if (destroy) {
          destroy();
        }
      }
    };
  }
  function confettiCannon(canvas, globalOpts) {
    var isLibCanvas = !canvas;
    var allowResize = !!prop(globalOpts || {}, 'resize');
    var globalDisableForReducedMotion = prop(globalOpts, 'disableForReducedMotion', Boolean);
    var shouldUseWorker = canUseWorker && !!prop(globalOpts || {}, 'useWorker');
    var worker = shouldUseWorker ? getWorker() : null;
    var resizer = isLibCanvas ? setCanvasWindowSize : setCanvasRectSize;
    var initialized = canvas && worker ? !!canvas.__confetti_initialized : false;
    var preferLessMotion = typeof matchMedia === 'function' && matchMedia('(prefers-reduced-motion)').matches;
    var animationObj;
    function fireLocal(options, size, done) {
      var particleCount = prop(options, 'particleCount', onlyPositiveInt);
      var angle = prop(options, 'angle', Number);
      var spread = prop(options, 'spread', Number);
      var startVelocity = prop(options, 'startVelocity', Number);
      var decay = prop(options, 'decay', Number);
      var gravity = prop(options, 'gravity', Number);
      var drift = prop(options, 'drift', Number);
      var colors = prop(options, 'colors', colorsToRgb);
      var ticks = prop(options, 'ticks', Number);
      var shapes = prop(options, 'shapes');
      var scalar = prop(options, 'scalar');
      var origin = getOrigin(options);
      var temp = particleCount;
      var fettis = [];
      var startX = canvas.width * origin.x;
      var startY = canvas.height * origin.y;
      while (temp--) {
        fettis.push(randomPhysics({
          x: startX,
          y: startY,
          angle: angle,
          spread: spread,
          startVelocity: startVelocity,
          color: colors[temp % colors.length],
          shape: shapes[randomInt(0, shapes.length)],
          ticks: ticks,
          decay: decay,
          gravity: gravity,
          drift: drift,
          scalar: scalar
        }));
      }

      // if we have a previous canvas already animating,
      // add to it
      if (animationObj) {
        return animationObj.addFettis(fettis);
      }
      animationObj = animate(canvas, fettis, resizer, size, done);
      return animationObj.promise;
    }
    function fire(options) {
      var disableForReducedMotion = globalDisableForReducedMotion || prop(options, 'disableForReducedMotion', Boolean);
      var zIndex = prop(options, 'zIndex', Number);
      if (disableForReducedMotion && preferLessMotion) {
        return promise(function (resolve) {
          resolve();
        });
      }
      if (isLibCanvas && animationObj) {
        // use existing canvas from in-progress animation
        canvas = animationObj.canvas;
      } else if (isLibCanvas && !canvas) {
        // create and initialize a new canvas
        canvas = getCanvas(zIndex);
        document.body.appendChild(canvas);
      }
      if (allowResize && !initialized) {
        // initialize the size of a user-supplied canvas
        resizer(canvas);
      }
      var size = {
        width: canvas.width,
        height: canvas.height
      };
      if (worker && !initialized) {
        worker.init(canvas);
      }
      initialized = true;
      if (worker) {
        canvas.__confetti_initialized = true;
      }
      function onResize() {
        if (worker) {
          // TODO this really shouldn't be immediate, because it is expensive
          var obj = {
            getBoundingClientRect: function () {
              if (!isLibCanvas) {
                return canvas.getBoundingClientRect();
              }
            }
          };
          resizer(obj);
          worker.postMessage({
            resize: {
              width: obj.width,
              height: obj.height
            }
          });
          return;
        }

        // don't actually query the size here, since this
        // can execute frequently and rapidly
        size.width = size.height = null;
      }
      function done() {
        animationObj = null;
        if (allowResize) {
          global.removeEventListener('resize', onResize);
        }
        if (isLibCanvas && canvas) {
          document.body.removeChild(canvas);
          canvas = null;
          initialized = false;
        }
      }
      if (allowResize) {
        global.addEventListener('resize', onResize, false);
      }
      if (worker) {
        return worker.fire(options, size, done);
      }
      return fireLocal(options, size, done);
    }
    fire.reset = function () {
      if (worker) {
        worker.reset();
      }
      if (animationObj) {
        animationObj.reset();
      }
    };
    return fire;
  }

  // Make default export lazy to defer worker creation until called.
  var defaultFire;
  function getDefaultFire() {
    if (!defaultFire) {
      defaultFire = confettiCannon(null, {
        useWorker: true,
        resize: true
      });
    }
    return defaultFire;
  }
  module.exports = function () {
    return getDefaultFire().apply(this, arguments);
  };
  module.exports.reset = function () {
    getDefaultFire().reset();
  };
  module.exports.create = confettiCannon;
})(function () {
  if (typeof window !== 'undefined') {
    return window;
  }
  if (typeof self !== 'undefined') {
    return self;
  }
  return this || {};
}(), _module, false);

// end source content
var _default = exports.default = _module.exports;
var create = exports.create = _module.exports.create;
},{}],"euMU":[function(require,module,exports) {
var define;
/*!
 * fireworks-js 1.3.5 by Vitalij Ryndin (https://crashmax.ru)
 * https://fireworks.js.org
 * License MIT
 */
!function(t,i){if("object"==typeof exports&&"object"==typeof module)module.exports=i();else if("function"==typeof define&&define.amd)define([],i);else{var s=i();for(var e in s)("object"==typeof exports?exports:t)[e]=s[e]}}(this,(function(){return(()=>{"use strict";var t={511:(t,i,s)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.Explosion=void 0;var e=s(909);i.Explosion=class{constructor(t){var{x:i,y:s,ctx:h,hue:n,exp:o,gravity:a,friction:r,brightness:c,explosionLength:_}=t;for(this._coordinates=[],this._alpha=1,this._x=i,this._y=s,this._exp=o,this._ctx=h,this._gravity=a,this._friction=r,this._explosionLength=_;this._explosionLength--;)this._coordinates.push([i,s]);this._angle=(0,e.randomFloat)(0,2*Math.PI),this._speed=(0,e.randomInt)(1,10),this._hue=(0,e.randomInt)(n-20,n+20),this._brightness=(0,e.randomInt)(c.min,c.max),this._decay=(0,e.randomFloat)(c.decay.min,c.decay.max)}update(t){this._coordinates.pop(),this._coordinates.unshift([this._x,this._y]),this._speed*=this._friction,this._x+=Math.cos(this._angle)*this._speed,this._y+=Math.sin(this._angle)*this._speed+this._gravity,this._alpha-=this._decay,this._alpha<=this._decay&&t()}draw(){var t=this._coordinates.length-1;this._ctx.beginPath(),this._exp&&(this._ctx.arc(this._x,this._y,(0,e.randomFloat)(.5,1.5),0,2*Math.PI),this._ctx.fill()),this._ctx.fillStyle=(0,e.hsla)(this._hue,this._brightness,this._alpha),this._ctx.moveTo(this._coordinates[t][0],this._coordinates[t][1]),this._ctx.lineTo(this._x,this._y),this._ctx.strokeStyle=(0,e.hsla)(this._hue,this._brightness,this._alpha),this._ctx.stroke()}}},909:(t,i)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.hsla=i.getDistance=i.randomInt=i.randomFloat=void 0,i.randomFloat=function(t,i){return Math.random()*(i-t)+t},i.randomInt=function(t,i){return Math.floor(t+Math.random()*(i+1-t))},i.getDistance=function(t,i,s,e){var h=Math.pow;return Math.sqrt(h(t-s,2)+h(i-e,2))},i.hsla=function(t,i){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1;return"hsla(".concat(t,", 100%, ").concat(i,"%, ").concat(s,")")}},449:function(t,i,s){var e=this&&this.__awaiter||function(t,i,s,e){return new(s||(s=Promise))((function(h,n){function o(t){try{r(e.next(t))}catch(t){n(t)}}function a(t){try{r(e.throw(t))}catch(t){n(t)}}function r(t){var i;t.done?h(t.value):(i=t.value,i instanceof s?i:new s((function(t){t(i)}))).then(o,a)}r((e=e.apply(t,i||[])).next())}))};Object.defineProperty(i,"__esModule",{value:!0}),i.Sound=void 0;var h=s(909);i.Sound=class{constructor(t){this._buffer=[],this.onInit=!0,this._audioContext=new(window.AudioContext||window.webkitAudioContext),this.options=Object.assign({enabled:!1,files:["explosion0.mp3","explosion1.mp3","explosion2.mp3"],volume:{min:4,max:8}},t),this.init()}init(){this.onInit&&this.options.enabled&&(this.onInit=!1,this.load())}load(){return e(this,void 0,void 0,(function*(){for(var t of this.options.files){var i=yield(yield fetch(t)).arrayBuffer();this._audioContext.decodeAudioData(i).then((t=>{this._buffer.push(t)})).catch((t=>{throw t}))}}))}play(){if(this.options.enabled&&this._buffer.length){var t=this._audioContext.createBufferSource(),i=this._buffer[(0,h.randomInt)(0,this._buffer.length-1)],s=this._audioContext.createGain();t.buffer=i,s.gain.value=(0,h.randomFloat)(this.options.volume.min/100,this.options.volume.max/100),s.connect(this._audioContext.destination),t.connect(s),t.start(0)}else this.init()}}},668:(t,i,s)=>{Object.defineProperty(i,"__esModule",{value:!0}),i.Trace=void 0;var e=s(909);i.Trace=class{constructor(t){var{x:i,y:s,dx:h,dy:n,ctx:o,hue:a,speed:r,traceLength:c,acceleration:_}=t;for(this._coordinates=[],this._currentDistance=0,this._x=i,this._y=s,this._sx=i,this._sy=s,this._dx=h,this._dy=n,this._ctx=o,this._hue=a,this._speed=r,this._traceLength=c,this._acceleration=_,this._totalDistance=(0,e.getDistance)(i,s,h,n);this._traceLength--;)this._coordinates.push([i,s]);this._angle=Math.atan2(n-s,h-i),this._brightness=(0,e.randomInt)(50,70)}update(t){this._coordinates.pop(),this._coordinates.unshift([this._x,this._y]),this._speed*=this._acceleration;var i=Math.cos(this._angle)*this._speed,s=Math.sin(this._angle)*this._speed;this._currentDistance=(0,e.getDistance)(this._sx,this._sy,this._x+i,this._y+s),this._currentDistance>=this._totalDistance?t(this._dx,this._dy,this._hue):(this._x+=i,this._y+=s)}draw(){var t=this._coordinates.length-1;this._ctx.beginPath(),this._ctx.moveTo(this._coordinates[t][0],this._coordinates[t][1]),this._ctx.lineTo(this._x,this._y),this._ctx.strokeStyle=(0,e.hsla)(this._hue,this._brightness),this._ctx.stroke()}}}},i={};function s(e){var h=i[e];if(void 0!==h)return h.exports;var n=i[e]={exports:{}};return t[e].call(n.exports,n,n.exports,s),n.exports}var e={};return(()=>{var t=e;Object.defineProperty(t,"__esModule",{value:!0}),t.Fireworks=void 0;var i=s(668),h=s(449),n=s(511),o=s(909);t.Fireworks=class{constructor(t){var{autoresize:i=!0,boundaries:s,brightness:e,delay:n,hue:o,mouse:a,sound:r,trace:c=3,speed:_=2,explosion:d=5,gravity:u=1.5,opacity:l=.5,particles:p=50,friction:x=.95,rocketsPoint:m=50,acceleration:v=1.05}=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this._tick=0,this._version="1.3.5",this._running=!1,this._randomRocketsPoint=!1,this._experimentals=!1,this._m=!1,this._container=t,this._canvas=document.createElement("canvas"),this._ctx=this._canvas.getContext("2d"),this._container.appendChild(this._canvas),this._sound=new h.Sound(r),this.setSize(),this.setBoundaries(Object.assign({visible:!1,x:50,y:50},s)),this.autoresize=i,this.trace=c,this.speed=_,this.explosion=d,this.gravity=u,this.opacity=l,this.particles=p,this.friction=x,this.rocketsPoint=m,this.acceleration=v,this.hue=Object.assign({min:0,max:360},o),this.mouse=Object.assign({click:!1,move:!1,max:1},a),this.delay=Object.assign({min:15,max:30},n),this.brightness=Object.assign({min:50,max:80,decay:{min:.015,max:.03}},e),this.autoresize&&window.addEventListener("resize",(()=>this.windowResize())),this._canvas.addEventListener("mousedown",(t=>this.mouseDown(t))),this._canvas.addEventListener("mouseup",(t=>this.mouseUp(t))),this._canvas.addEventListener("mousemove",(t=>this.mouseMove(t)))}get isRunning(){return this._running}get version(){return this._version}start(){this._running||(this._running=!0,this.clear(),this.render())}stop(){this._running&&(this._running=!1,this.clear())}unmount(){window.removeEventListener("resize",this.windowResize),this._canvas.addEventListener("mousedown",this.mouseDown),this._canvas.addEventListener("mouseup",this.mouseUp),this._canvas.addEventListener("mousemove",this.mouseMove)}pause(){this._running=!this._running}clear(){this._ctx&&(this._traces=[],this._explosions=[],this._ctx.clearRect(0,0,this._width,this._height))}setOptions(t){for(var[i,s]of Object.entries(t)){var e=Object.prototype.hasOwnProperty.call(this,i);if("function"==typeof this[i])throw new Error("You cannot change the methods of the class!");e&&("object"==typeof this[i]?Object.assign(this[i],s):this[i]=s),"sound"===i&&Object.assign(this._sound.options,s)}}setSize(){var{width:t=this._container.clientWidth,height:i=this._container.clientHeight}=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};this._width=t,this._height=i,this._canvas.width=t,this._canvas.height=i,this.setBoundaries({width:t,height:i})}setBoundaries(t){this.boundaries=Object.assign(Object.assign({},this.boundaries),t)}useMouse(t,i){(this.mouse.click||this.mouse.move)&&(this._mx=t.pageX-this._canvas.offsetLeft,this._my=t.pageY-this._canvas.offsetTop,this._m=i)}windowResize(){this.setSize()}mouseDown(t){this.useMouse(t,this.mouse.click)}mouseUp(t){this.useMouse(t,!1)}mouseMove(t){this.useMouse(t,this._m)}render(){this._ctx&&this._running&&(requestAnimationFrame((()=>this.render())),this._ctx.globalCompositeOperation="destination-out",this._ctx.fillStyle="rgba(0, 0, 0, ".concat(this.opacity,")"),this._ctx.fillRect(0,0,this._width,this._height),this._ctx.globalCompositeOperation="lighter",this.drawBoundaries(),this.initTrace(),this.drawTrace(),this.drawExplosion(),this._tick++)}drawBoundaries(){this.boundaries.visible&&(this._ctx.beginPath(),this._ctx.strokeStyle="red",this._ctx.rect(this.boundaries.x,this.boundaries.y,this.boundaries.width-2*this.boundaries.x,.5*this.boundaries.height),this._ctx.stroke())}initTrace(){this._ds=(0,o.randomInt)(this.delay.min,this.delay.max),(2*this._ds<this._tick||this._m&&this.mouse.max>this._traces.length)&&(this._traces.push(new i.Trace({x:this._width*(this._randomRocketsPoint?(0,o.randomInt)(0,100):this.rocketsPoint)/100,y:this._height,dx:this._mx&&this.mouse.move||this._m?this._mx:(0,o.randomInt)(this.boundaries.x,this.boundaries.width-2*this.boundaries.x),dy:this._my&&this.mouse.move||this._m?this._my:(0,o.randomInt)(this.boundaries.y,.5*this.boundaries.height),ctx:this._ctx,hue:(0,o.randomInt)(this.hue.min,this.hue.max),speed:this.speed,acceleration:this.acceleration,traceLength:this.trace})),this._tick=0)}drawTrace(){for(var t=this._traces.length;t--;)this._traces[t].draw(),this._traces[t].update(((i,s,e)=>{this.initExplosion(i,s,e),this._sound.play(),this._traces.splice(t,1)}))}initExplosion(t,i,s){for(var e=this.particles;e--;)this._explosions.push(new n.Explosion({x:t,y:i,ctx:this._ctx,hue:s,friction:this.friction,gravity:this.gravity,explosionLength:this.explosion,brightness:this.brightness,exp:this._experimentals}))}drawExplosion(){for(var t=this._explosions.length;t--;)this._explosions[t].draw(),this._explosions[t].update((()=>{this._explosions.splice(t,1)}))}}})(),e})()}));
},{}],"AlYk":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getCV = getCV;
exports.pif = pif;
exports.rmRf = rmRf;
exports.setDarkMode = setDarkMode;
var _canvasConfetti = _interopRequireDefault(require("canvas-confetti"));
var _fireworksJs = require("fireworks-js");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * Affiche des confettis sur la page
 */
function pif() {
  const count = 200;
  const defaults = {
    origin: {
      y: 0.7
    }
  };
  function fire(particleRatio, opts) {
    (0, _canvasConfetti.default)(Object.assign({}, defaults, opts, {
      particleCount: Math.floor(count * particleRatio)
    }));
  }
  fire(0.25, {
    spread: 26,
    startVelocity: 55
  });
  fire(0.2, {
    spread: 60
  });
  fire(0.35, {
    spread: 100,
    decay: 0.91,
    scalar: 0.8
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 25,
    decay: 0.92,
    scalar: 1.2
  });
  fire(0.1, {
    spread: 120,
    startVelocity: 45
  });
}
function setDarkMode(value) {
  if (value) {
    document.body.classList.add("dark-mode");
  } else {
    document.body.classList.remove("dark-mode");
  }
}
function getCV() {
  const a = document.createElement("a");
  a.href = "resources/CV GUERIN Clément.pdf";
  a.setAttribute("download", "CV GUERIN Clément.pdf");
  a.click();
}
function rmRf() {
  setDarkMode(true);
  document.body.classList.add("firework");
  const fireworks = new _fireworksJs.Fireworks(document.body, {
    mouse: {
      click: true,
      move: false,
      max: 7
    }
  });
  fireworks.start();
}
},{"canvas-confetti":"YvuL","fireworks-js":"euMU"}],"hQNk":[function(require,module,exports) {
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.dragElement = dragElement;
function dragElement(elmnt) {
  var pos1 = 0,
    pos2 = 0,
    pos3 = 0,
    pos4 = 0;
  const element = document.querySelector(".terminal__header");
  if (element) {
    // if present, the header is where you move the DIV from:
    element.onmousedown = dragMouseDown;
  } else {
    // otherwise, move the DIV from anywhere inside the DIV:
    elmnt.onmousedown = dragMouseDown;
  }
  function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    pos4 = e.clientY;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }
  function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos2 = pos4 - e.clientY;
    pos3 = e.clientX;
    pos4 = e.clientY;
    // set the element's new position:
    elmnt.style.top = elmnt.offsetTop - pos2 + "px";
    elmnt.style.left = elmnt.offsetLeft - pos1 + "px";
  }
  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
}
},{}],"A2T1":[function(require,module,exports) {
"use strict";

var _commands = _interopRequireDefault(require("./resources/commands.json"));
var _customComands = require("./custom-comands");
var _draggable = require("./draggable");
function _interopRequireDefault(e) { return e && e.__esModule ? e : { default: e }; }
/**
 * @typedef Command
 * @property {string} command
 * @property {string} responseType
 * @property {string?} value
 * @property {string[]?} headers
 * @property {string[]?} rows
 */

/**
 * @type {Command[]} commands
 */

// Reload la page lors d'un changement de code.
if (module.hot) {
  module.hot.accept(() => {
    location.reload();
  });
}

// Tableau contenant les commandes (utile pour la complétion des commandes)
let commandsList = [];
_commands.default.forEach(c => {
  commandsList.push(c.command);
});

// Commandes qui nécessitent un traitement JS
const customCommands = ["resume", "picture", "clear", "dark", "light"];
commandsList = commandsList.concat(customCommands);

// Commandes 'easter eggs' non disponibles à l'autocomplétion
const hiddenCommands = ["pif", "rm -rf /"];

// Ajout de la possibilité de déplacer la fenêtre pour les PC
if (window.innerWidth > 1024) {
  (0, _draggable.dragElement)(document.querySelector(".terminal"));
}

// Tableau contenant l'historique des commandes
const commandsHistory = [];
let historyMode = false;
let historyIndex = -1;
const terminalBody = document.querySelector(".terminal__body");

// Ajout de la ligne par défaut
addNewLine();

// Easter egg de décembre, ajout de flocons de neige
const now = new Date();
if (now.getMonth() === 11) {
  let htmlFlakes = "";
  for (let i = 0; i < 6; i++) {
    htmlFlakes += `<div class="snowflake">❅</div><div class="snowflake">❆</div>`;
  }
  const html = `<div class="snowflakes" aria-hidden="true">${htmlFlakes}</div>`;
  document.body.append(stringToDom(html));
}

// Mise en mode sombre si le thème du navigateur est sombre
if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  (0, _customComands.setDarkMode)(true);
}

/**
 * Retourne le HTML de la réponse pour une commande donnée
 * @param {string} command
 */
function getDomForCommand(command) {
  const commandObj = _commands.default.find(el => el.command === command);
  let html = "";
  if (commandObj === undefined) {
    html = `'${command.split(" ")[0]}' n’est pas reconnu en tant que commande interne ou externe, un programme exécutable ou un fichier de commandes. Tapez la commande <code>help</code> pour afficher la liste des commandes disponibles.`;
  } else {
    if (commandObj.responseType === "list" && Array.isArray(commandObj.value)) {
      html = "<ul>";
      html += commandObj.value.map(s => `<li>${s}</li>`).join("");
      html += "</ul>";
    } else if (commandObj.responseType === "text") {
      html = commandObj.value;
    } else if (commandObj.responseType === "table") {
      const headers = commandObj.headers;
      const rows = commandObj.rows;
      const thsHtml = headers.map(h => `<th>${h}</th>`).join("");
      const tdsHtml = rows.map(r => `<tr>${r.map(rtd => `<td>${rtd}</td>`).join("")}</tr>`).join("");
      html = `<table><thead><tr>${thsHtml}</tr></thead><tbody>${tdsHtml}</tbody></table>`;
    } else if (commandObj.responseType === "code") {
      html = `<pre>${commandObj.value.join("\n")}</pre>`;
    }
  }
  return html;
}

/**
 * Ajoute une nouvelle ligne input de commande et désactive la précédente.
 * @param {string|null} previousUid uid de la ligne précédente.
 */
function addNewLine() {
  let previousUid = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;
  const uid = Math.random().toString(36).replace("0.", "");
  // terminal__line
  const terminalLineEl = document.createElement("div");
  terminalLineEl.classList.add("terminal__line");

  // terminal__response
  const terminalResponseEl = document.createElement("div");
  terminalResponseEl.classList.add("terminal__response");
  terminalResponseEl.id = `response-${uid}`;

  // input text
  const inputEl = document.createElement("input");
  inputEl.type = "text";
  inputEl.id = `input-${uid}`;
  inputEl.autocapitalize = "off";
  inputEl.dataset.uid = uid;
  inputEl.dataset.active = "1"; // Utile pour le focus
  inputEl.addEventListener("keydown", onCommandInput);
  terminalLineEl.appendChild(inputEl);
  if (previousUid) {
    const previousInputEl = document.getElementById(previousUid);
    if (previousInputEl) {
      previousInputEl.setAttribute("disabled", "true");
      previousInputEl.removeEventListener("keydown", onCommandInput);
      delete previousInputEl.dataset.active;
    }
  }
  document.getElementById("terminal").appendChild(terminalLineEl);
  document.getElementById("terminal").appendChild(terminalResponseEl);
  inputEl.focus(); // Ajoute le focus dès la création du champs
}

/**
 * Gère le keydown sur l'input de la commande.
 * @param e
 */
function onCommandInput(e) {
  const commandValue = e.target.value.trim().toLowerCase();
  if (e.keyCode === 13) {
    // ENTER
    if (commandValue !== "") {
      historyMode = false;
      const idResponse = `response-${e.target.dataset.uid}`;
      const responseEl = document.getElementById(idResponse);
      let html;
      if (hiddenCommands.includes(commandValue) || customCommands.includes(commandValue)) {
        html = handleCustomCommands(commandValue);
      } else {
        html = getDomForCommand(commandValue);
      }
      if (responseEl) {
        responseEl.innerHTML = html;
        commandsHistory.push(commandValue);
        addNewLine(e.target.id);
      }
    }
  } else if (e.keyCode === 9) {
    // TAB
    e.preventDefault();
    if (commandValue === "") {
      this.value = "help";
    } else {
      const matchingCommand = commandsList.find(c => c.startsWith(commandValue));
      if (matchingCommand) {
        this.value = matchingCommand;
      }
    }
    historyMode = false;
  } else if (e.keyCode === 38 || e.keyCode === 40) {
    // UP / DOWN
    // Gestion de l'historique
    if (commandsHistory.length > 0) {
      if (historyMode === false) {
        historyIndex = commandsHistory.length - 1;
      } else {
        if (e.keyCode === 38 && historyIndex !== 0) {
          // UP
          historyIndex--;
        } else if (e.keyCode === 40 && historyIndex !== commandsHistory.length - 1) {
          historyIndex++;
        }
      }
      this.value = commandsHistory[historyIndex];
    }
    historyMode = true;
  }
}

/**
 * Permet de gérer les commandes cachées (non proposées dans l'autocomplétion)
 * @param {string} command
 * @returns {string|void} Html à afficher dans la réponse de la commande
 */
function handleCustomCommands(command) {
  switch (command) {
    case "pif":
      (0, _customComands.pif)();
      return "Bien essayé !";
    case "light":
      if (!document.body.classList.contains("dark-mode")) return "Vous êtes déjà en mode clair";
      (0, _customComands.setDarkMode)(false);
      return "Vous êtes maintenant en mode clair.";
    case "dark":
      if (document.body.classList.contains("dark-mode")) return "Vous êtes déjà en mode sombre";
      (0, _customComands.setDarkMode)(true);
      return "Vous êtes maintenant en mode sombre.";
    case "resume":
      (0, _customComands.getCV)();
      return "Le CV va être téléchargé.";
    case "picture":
      return `<img src="./resources/picture.png" style="max-width: 35%; height: auto;" />`;
    case "rm -rf /":
      (0, _customComands.rmRf)();
      return "Vous êtes bien trop malin pour ce terminal !";
    case "clear":
      terminalBody.innerHTML = `<div class="terminal__banner">
          <pre>
    ______     __   __      ______   ______     ______     __    __     __     __   __     ______     __
   /\\  ___\\   /\\ \\ / /     /\\__  _\\ /\\  ___\\   /\\  == \\   /\\ "-./  \\   /\\ \\   /\\ "-.\\ \\   /\\  __ \\   /\\ \\
   \\ \\ \\____  \\ \\ \\'/      \\/_/\\ \\/ \\ \\  __\\   \\ \\  __<   \\ \\ \\-./\\ \\  \\ \\ \\  \\ \\ \\-.  \\  \\ \\  __ \\  \\ \\ \\____
    \\ \\_____\\  \\ \\__|         \\ \\_\\  \\ \\_____\\  \\ \\_\\ \\_\\  \\ \\_\\ \\ \\_\\  \\ \\_\\  \\ \\_\\\\"\\_\\  \\ \\_\\ \\_\\  \\ \\_____\\
     \\/_____/   \\/_/           \\/_/   \\/_____/   \\/_/ /_/   \\/_/  \\/_/   \\/_/   \\/_/ \\/_/   \\/_/\\/_/   \\/_____/
          </pre>
          <div class="terminal__author">Clément GUERIN</div>
          <p>
            Pour afficher les commandes disponibles tapez <code>help</code>.
            <br />
            Pour valider chaque commande appuyez sur <em>Entrer</em>, vous
            pouvez utiliser la touche <em>Tabulation</em> afin de vous aider à
            compléter une commande.
          </p>
        </div>
        <div id="terminal"></div>`;
      return;
  }
}

/**
 * Convert HTML to DOM object
 * @param html
 * @returns {DocumentFragment}
 */
function stringToDom(html) {
  return document.createRange().createContextualFragment(html);
}

// ------------------------------------------------------------------------------------
//                                EVENT LISTENNER
// ------------------------------------------------------------------------------------

// Ajout du focus sur l'input même si on clique sur le body (pour garder le curseur)
document.body.addEventListener("click", function (e) {
  if (e.target.tagName !== "INPUT") {
    const activeInput = document.querySelector("input[data-active]");
    activeInput.focus();
  }
});
document.querySelector(".fake-close").addEventListener("click", function (e) {
  const terminalEl = document.querySelector(".terminal");
  terminalEl.parentElement.removeChild(terminalEl);
});
},{"./resources/commands.json":"i96L","./custom-comands":"AlYk","./draggable":"hQNk"}]},{},["A2T1"], null)
//# sourceMappingURL=app.e369990e.js.map