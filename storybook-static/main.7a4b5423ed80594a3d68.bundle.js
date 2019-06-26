;(window.webpackJsonp = window.webpackJsonp || []).push([
  [0],
  {
    33: function(module, __webpack_exports__, __webpack_require__) {
      "use strict"
      let react = __webpack_require__(0);
        var react_default = __webpack_require__.n(react);
        var prop_types = __webpack_require__(2);
        var prop_types_default = __webpack_require__.n(prop_types);
        var index_esm = __webpack_require__(7);
        var md_index_esm = __webpack_require__(87);
        var gatsby_browser_entry = __webpack_require__(101)
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (let i = 1; i < arguments.length; i++) {
              let source = arguments[i]
              for (let key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key])
            }
            return target
          }).apply(this, arguments)
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {}
        let key;
          var i;
          var target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {}
            let key;
              var i;
              var target = {};
              var sourceKeys = Object.keys(source)
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key])
            return target
          })(source, excluded)
        if (Object.getOwnPropertySymbols) {
          let sourceSymbolKeys = Object.getOwnPropertySymbols(source)
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]))
        }
        return target
      }
      function _objectSpread(target) {
        for (let i = 1; i < arguments.length; i++) {
          var source = null != arguments[i] ? arguments[i] : {};
            var ownKeys = Object.keys(source)
          `function` == typeof Object.getOwnPropertySymbols &&
            (ownKeys = ownKeys.concat(
              Object.getOwnPropertySymbols(source).filter(function(sym) {
                return Object.getOwnPropertyDescriptor(source, sym).enumerable
              })
            )),
            ownKeys.forEach(function(key) {
              _defineProperty(target, key, source[key])
            })
        }
        return target
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        )
      }
      let SkeletonStyledComponent = Object(index_esm.a)(`button`, {
          target: `e1111t2i0`,
        })();
        var buttonPropTypes = {
          disabled: prop_types_default.a.bool,
          loading: prop_types_default.a.bool,
          loadingLabel: prop_types_default.a.string,
          href: prop_types_default.a.string,
          size: prop_types_default.a.string,
          to: prop_types_default.a.string,
        };
        var buttonSkeletonPropTypes = _objectSpread({}, buttonPropTypes, {
          StyledComponent: prop_types_default.a.any,
        });
        var buttonDefaultPropTypes = {
          disabled: !1,
          loading: !1,
          loadingLabel: "Loading",
          size: "L",
        };
        var buttonSkeletonDefaultPropTypes = _objectSpread(
          {},
          buttonDefaultPropTypes,
          { StyledComponent: SkeletonStyledComponent }
        );
        var Button_Skeleton_ButtonSkeleton = function ButtonSkeleton(_ref) {
          let StyledComponent = _ref.StyledComponent;
            var children = _ref.children;
            var disabled = _ref.disabled;
            var href = _ref.href;
            var loading = _ref.loading;
            var loadingLabel = _ref.loadingLabel;
            var to = _ref.to;
            var rest = _objectWithoutProperties(_ref, [
              `StyledComponent`,
              `children`,
              `disabled`,
              `href`,
              `loading`,
              `loadingLabel`,
              `to`,
            ])
          if (href) {
            let ComponentAsExternalLink = StyledComponent.withComponent(`a`, {
              target: `e1111t2i1`,
            })
            return react_default.a.createElement(
              ComponentAsExternalLink,
              _extends({ href: href }, rest),
              children
            )
          }
          if (to) {
            let ComponentAsInternalLink = StyledComponent.withComponent(
              gatsby_browser_entry.a,
              { target: `e1111t2i2` }
            )
            return react_default.a.createElement(
              ComponentAsInternalLink,
              _extends({ to: to }, rest),
              children
            )
          }
          return react_default.a.createElement(
            StyledComponent,
            _extends({ disabled: disabled, loading: loading }, rest),
            loading
              ? react_default.a.createElement(
                  react.Fragment,
                  null,
                  loadingLabel,
                  ` `,
                  react_default.a.createElement(md_index_esm.b, null)
                )
              : children
          )
        }
      ;(Button_Skeleton_ButtonSkeleton.propTypes = buttonSkeletonPropTypes),
        (Button_Skeleton_ButtonSkeleton.defaultProps = buttonSkeletonDefaultPropTypes)
      let Button_Skeleton = Button_Skeleton_ButtonSkeleton
      Button_Skeleton_ButtonSkeleton.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `ButtonSkeleton`,
        props: {
          StyledComponent: {
            defaultValue: { value: `styled(\`button\`)\`\``, computed: !1 },
            type: { name: `any` },
            required: !1,
            description: ``,
          },
          disabled: { type: { name: `bool` }, required: !1, description: `` },
          loading: { type: { name: `bool` }, required: !1, description: `` },
          loadingLabel: {
            type: { name: `string` },
            required: !1,
            description: ``,
          },
          href: { type: { name: `string` }, required: !1, description: `` },
          size: { type: { name: `string` }, required: !1, description: `` },
          to: { type: { name: `string` }, required: !1, description: `` },
        },
      }
      let presets = __webpack_require__(4)
      function BaseButton_extends() {
        return (BaseButton_extends =
          Object.assign ||
          function(target) {
            for (let i = 1; i < arguments.length; i++) {
              let source = arguments[i]
              for (let key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key])
            }
            return target
          }).apply(this, arguments)
      }
      let BaseButton_loading = Object(index_esm.b)(
          `0%{transform:translateX(0.2em) rotate(0);}100%{transform:translateX(0.2em) rotate(360deg);}`
        );
        var pulse = Object(index_esm.b)(
          "33%{transform:translateX(0.2em) scale(1.05);}66%{transform:translateX(0.2em) scale(0.85);}"
        );
        var sizes = {
          S: {
            fontSize: 0.875,
            height: 1.5,
            horizontalPadding: 0.5,
            verticalPadding: 0.3,
          },
          M: {
            fontSize: 1,
            height: 2,
            horizontalPadding: 0.75,
            verticalPadding: 0.45,
          },
          L: {
            fontSize: 1.125,
            height: 2.25,
            horizontalPadding: 1,
            verticalPadding: 0.55,
          },
          XL: {
            fontSize: 1.5,
            height: 3.25,
            horizontalPadding: 1.25,
            verticalPadding: 0.65,
          },
        };
        var StyledBaseButton = Object(index_esm.a)(SkeletonStyledComponent, {
          target: "e2s9gwk0",
        })(
          "align-items:center;border:",
          presets.c.grey[600],
          ";border-radius:",
          presets.d.default,
          ";box-sizing:border-box;cursor:pointer;display:inline-flex;font-family:",
          presets.b.headerFontFamily,
          ";font-size:",
          function(props) {
            return sizes[props.size].fontSize
          },
          "rem;justify-content:center;line-height:1;min-height:",
          function(props) {
            return sizes[props.size].height
          },
          "rem;padding:",
          function(props) {
            return sizes[props.size].verticalPadding
          },
          "rem ",
          function(props) {
            return sizes[props.size].horizontalPadding
          },
          "rem;text-decoration:none;transition:0.5s;&[disabled],&[disabled]:hover{cursor:not-allowed;opacity:0.5;}svg{animation:",
          function(props) {
            return props.loading
              ? "".concat(BaseButton_loading, " 1s linear infinite")
              : ""
          },
          ";flex-shrink:0;transform:translateX(0.2em) scale(1);}&:hover:not([disabled]){svg{animation:",
          pulse,
          " 1s linear infinite;}}"
        );
        var BaseButton_BaseButton = function BaseButton(props) {
          return react_default.a.createElement(
            Button_Skeleton,
            BaseButton_extends({ StyledComponent: StyledBaseButton }, props)
          )
        }
      ;(BaseButton_BaseButton.propTypes = buttonPropTypes),
        (BaseButton_BaseButton.defaultProps = buttonDefaultPropTypes)
      let Button_BaseButton = BaseButton_BaseButton
      function PrimaryButton_extends() {
        return (PrimaryButton_extends =
          Object.assign ||
          function(target) {
            for (let i = 1; i < arguments.length; i++) {
              let source = arguments[i]
              for (let key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key])
            }
            return target
          }).apply(this, arguments)
      }
      BaseButton_BaseButton.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `BaseButton`,
        composes: [`./Button.Skeleton`],
      }
      let StyledPrimaryButton = Object(index_esm.a)(StyledBaseButton, {
          target: `e1ao8tn20`,
        })(
          `background:`,
          presets.a.gatsby,
          `;border:0;color:`,
          presets.c.white,
          `;font-weight:bold;:focus,:hover{background:`,
          presets.c.purple[700],
          `;}`
        );
        var PrimaryButton_PrimaryButton = function PrimaryButton(props) {
          return react_default.a.createElement(
            Button_Skeleton,
            PrimaryButton_extends(
              { StyledComponent: StyledPrimaryButton },
              props
            )
          )
        }
      ;(PrimaryButton_PrimaryButton.propTypes = buttonPropTypes),
        (PrimaryButton_PrimaryButton.defaultProps = buttonDefaultPropTypes)
      let Button_PrimaryButton = PrimaryButton_PrimaryButton
      function SecondaryButton_extends() {
        return (SecondaryButton_extends =
          Object.assign ||
          function(target) {
            for (let i = 1; i < arguments.length; i++) {
              let source = arguments[i]
              for (let key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key])
            }
            return target
          }).apply(this, arguments)
      }
      function SecondaryButton_objectWithoutProperties(source, excluded) {
        if (null == source) return {}
        let key;
          var i;
          var target = (function SecondaryButton_objectWithoutPropertiesLoose(
            source,
            excluded
          ) {
            if (null == source) return {}
            let key;
              var i;
              var target = {};
              var sourceKeys = Object.keys(source)
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key])
            return target
          })(source, excluded)
        if (Object.getOwnPropertySymbols) {
          let sourceSymbolKeys = Object.getOwnPropertySymbols(source)
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]))
        }
        return target
      }
      PrimaryButton_PrimaryButton.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `PrimaryButton`,
        composes: [`./Button.Skeleton`],
      }
      let StyledSecondaryButton = Object(index_esm.a)(StyledBaseButton, {
          target: `e1141ey80`,
        })(
          `background:`,
          presets.c.white,
          `;border:1px solid `,
          presets.c.purple[200],
          `;color:`,
          presets.c.purple[500],
          `;:focus,&:hover:not([disabled]){border:1px solid `,
          presets.c.purple[600],
          `;color:`,
          presets.c.purple[600],
          `;}`
        );
        var SecondaryButton_SecondaryButton = function SecondaryButton(_ref) {
          _ref.StyledComponent
          let rest = SecondaryButton_objectWithoutProperties(_ref, [
            `StyledComponent`,
          ])
          return react_default.a.createElement(
            Button_Skeleton,
            SecondaryButton_extends(
              { StyledComponent: StyledSecondaryButton },
              rest
            )
          )
        }
      ;(SecondaryButton_SecondaryButton.propTypes = buttonPropTypes),
        (SecondaryButton_SecondaryButton.defaultProps = buttonDefaultPropTypes)
      let Button_SecondaryButton = SecondaryButton_SecondaryButton
      function CancelButton_extends() {
        return (CancelButton_extends =
          Object.assign ||
          function(target) {
            for (let i = 1; i < arguments.length; i++) {
              let source = arguments[i]
              for (let key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key])
            }
            return target
          }).apply(this, arguments)
      }
      SecondaryButton_SecondaryButton.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `SecondaryButton`,
        composes: [`./Button.Skeleton`],
      }
      let StyledCancelButton = Object(index_esm.a)(StyledBaseButton, {
          target: `ekow1iz0`,
        })(
          `background:`,
          presets.c.white,
          `;border:1px solid `,
          presets.c.grey[300],
          `;color:`,
          presets.c.grey[600],
          `;:focus,:hover{border:1px solid `,
          presets.c.grey[600],
          `;color:`,
          presets.c.grey[900],
          `;}`
        );
        var CancelButton_CancelButton = function CancelButton(props) {
          return react_default.a.createElement(
            Button_Skeleton,
            CancelButton_extends({ StyledComponent: StyledCancelButton }, props)
          )
        }
      ;(CancelButton_CancelButton.propTypes = buttonPropTypes),
        (CancelButton_CancelButton.defaultProps = buttonDefaultPropTypes)
      let Button_CancelButton = CancelButton_CancelButton
      function PrimaryDeleteButton_extends() {
        return (PrimaryDeleteButton_extends =
          Object.assign ||
          function(target) {
            for (let i = 1; i < arguments.length; i++) {
              let source = arguments[i]
              for (let key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key])
            }
            return target
          }).apply(this, arguments)
      }
      CancelButton_CancelButton.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `CancelButton`,
        composes: [`./Button.Skeleton`],
      }
      let StyledPrimaryDeleteButton = Object(index_esm.a)(StyledBaseButton, {
          target: `e1iju7if0`,
        })(
          `background:`,
          presets.c.red[600],
          `;border:1px solid `,
          presets.c.red[600],
          `;color:`,
          presets.c.white,
          `;font-weight:bold;:focus,:hover{background:`,
          presets.c.red[700],
          `;border-color:`,
          presets.c.red[900],
          `;}`
        );
        var PrimaryDeleteButton_PrimaryDeleteButton = function PrimaryDeleteButton(
          props
        ) {
          return react_default.a.createElement(
            Button_Skeleton,
            PrimaryDeleteButton_extends(
              { StyledComponent: StyledPrimaryDeleteButton },
              props
            )
          )
        }
      ;(PrimaryDeleteButton_PrimaryDeleteButton.propTypes = buttonPropTypes),
        (PrimaryDeleteButton_PrimaryDeleteButton.defaultProps = buttonDefaultPropTypes)
      let Button_PrimaryDeleteButton = PrimaryDeleteButton_PrimaryDeleteButton
      function SecondaryDeleteButton_extends() {
        return (SecondaryDeleteButton_extends =
          Object.assign ||
          function(target) {
            for (let i = 1; i < arguments.length; i++) {
              let source = arguments[i]
              for (let key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key])
            }
            return target
          }).apply(this, arguments)
      }
      PrimaryDeleteButton_PrimaryDeleteButton.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `PrimaryDeleteButton`,
        composes: [`./Button.Skeleton`],
      }
      let StyledSecondaryDeleteButton = Object(index_esm.a)(StyledBaseButton, {
          target: `erezyfw0`,
        })(
          `background:`,
          presets.c.white,
          `;border:1px solid `,
          presets.c.red[200],
          `;color:`,
          presets.c.red[500],
          `;:focus,:hover{border-color:`,
          presets.c.red[600],
          `;color:`,
          presets.c.red[600],
          `;}`
        );
        var SecondaryDeleteButton_SecondaryDeleteButton = function SecondaryDeleteButton(
          props
        ) {
          return react_default.a.createElement(
            Button_Skeleton,
            SecondaryDeleteButton_extends(
              { StyledComponent: StyledSecondaryDeleteButton },
              props
            )
          )
        }
      ;(SecondaryDeleteButton_SecondaryDeleteButton.propTypes = buttonPropTypes),
        (SecondaryDeleteButton_SecondaryDeleteButton.defaultProps = buttonDefaultPropTypes)
      let Button_SecondaryDeleteButton = SecondaryDeleteButton_SecondaryDeleteButton
      function SuccessButton_extends() {
        return (SuccessButton_extends =
          Object.assign ||
          function(target) {
            for (let i = 1; i < arguments.length; i++) {
              let source = arguments[i]
              for (let key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key])
            }
            return target
          }).apply(this, arguments)
      }
      SecondaryDeleteButton_SecondaryDeleteButton.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `SecondaryDeleteButton`,
        composes: [`./Button.Skeleton`],
      }
      let StyledSuccessButton = Object(index_esm.a)(StyledBaseButton, {
          target: `e1w1qh4l0`,
        })(
          `background:`,
          presets.c.green[600],
          `;border:1px solid `,
          presets.c.green[600],
          `;color:`,
          presets.c.white,
          `;font-weight:bold;:focus,:hover{background:`,
          presets.c.green[700],
          `;border-color:`,
          presets.c.green[900],
          `;}`
        );
        var SuccessButton_SuccessButton = function SuccessButton(props) {
          return react_default.a.createElement(
            Button_Skeleton,
            SuccessButton_extends(
              { StyledComponent: StyledSuccessButton },
              props
            )
          )
        }
      ;(SuccessButton_SuccessButton.propTypes = buttonPropTypes),
        (SuccessButton_SuccessButton.defaultProps = buttonDefaultPropTypes)
      let Button_SuccessButton = SuccessButton_SuccessButton
      function TextButton_extends() {
        return (TextButton_extends =
          Object.assign ||
          function(target) {
            for (let i = 1; i < arguments.length; i++) {
              let source = arguments[i]
              for (let key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key])
            }
            return target
          }).apply(this, arguments)
      }
      SuccessButton_SuccessButton.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `SuccessButton`,
        composes: [`./Button.Skeleton`],
      }
      let StyledTextButton = Object(index_esm.a)(StyledBaseButton, {
          target: `ed067lg0`,
        })(
          `background:`,
          presets.c.white,
          `;border:1px solid `,
          presets.c.white,
          `;color:`,
          presets.a.lilac,
          `;:focus,:hover{color:`,
          presets.a.gatsby,
          `;}`
        );
        var TextButton_TextButton = function TextButton(props) {
          return react_default.a.createElement(
            Button_Skeleton,
            TextButton_extends({ StyledComponent: StyledTextButton }, props)
          )
        }
      ;(TextButton_TextButton.propTypes = buttonPropTypes),
        (TextButton_TextButton.defaultProps = buttonDefaultPropTypes)
      let Button_TextButton = TextButton_TextButton
      ;(TextButton_TextButton.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `TextButton`,
        composes: [`./Button.Skeleton`],
      }),
        __webpack_require__.d(__webpack_exports__, `b`, function() {
          return Button_Skeleton
        }),
        __webpack_require__.d(__webpack_exports__, `a`, function() {
          return Button_BaseButton
        }),
        __webpack_require__.d(__webpack_exports__, `d`, function() {
          return Button_PrimaryButton
        }),
        __webpack_require__.d(__webpack_exports__, `f`, function() {
          return Button_SecondaryButton
        }),
        __webpack_require__.d(__webpack_exports__, `c`, function() {
          return Button_CancelButton
        }),
        __webpack_require__.d(__webpack_exports__, `e`, function() {
          return Button_PrimaryDeleteButton
        }),
        __webpack_require__.d(__webpack_exports__, `g`, function() {
          return Button_SecondaryDeleteButton
        }),
        __webpack_require__.d(__webpack_exports__, `h`, function() {
          return Button_SuccessButton
        }),
        __webpack_require__.d(__webpack_exports__, `i`, function() {
          return Button_TextButton
        })
    },
    342: function(module, __webpack_exports__, __webpack_require__) {
      "use strict"
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            `withStorySource`,
            function() {
              return withStorySource
            }
          ),
            __webpack_require__.d(__webpack_exports__, `__STORY__`, function() {
              return __STORY__
            }),
            __webpack_require__.d(
              __webpack_exports__,
              `__ADDS_MAP__`,
              function() {
                return __ADDS_MAP__
              }
            )
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
            var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
            var _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              30
            );
            var _src_utils_storybook_Welcome__WEBPACK_IMPORTED_MODULE_3__ = (__webpack_require__(
              18
            ),
            __webpack_require__(352));
            var withStorySource = __webpack_require__(217).withStorySource;
            var __STORY__ =
              "import React, { Fragment } from 'react';\n\nimport { storiesOf } from '@storybook/react';\nimport { action } from '@storybook/addon-actions';\n\nimport Welcome from '../src/utils/storybook/Welcome';\n\nstoriesOf('Welcome', module).add('to Gatsby Inteface', () => <Welcome />);\n";
            var __ADDS_MAP__ = {
              "welcome--to-gatsby-inteface": {
                startLoc: { col: 33, line: 8 },
                endLoc: { col: 72, line: 8 },
              },
            }
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            `Welcome`,
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .add(`to Gatsby Inteface`, function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_utils_storybook_Welcome__WEBPACK_IMPORTED_MODULE_3__.a,
                null
              )
            })
        }.call(this, __webpack_require__(110)(module))
    },
    352: function(module, __webpack_exports__, __webpack_require__) {
      "use strict"
      let react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
        var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
          react__WEBPACK_IMPORTED_MODULE_0__
        );
        var react_emotion__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
        var Welcome = Object(react_emotion__WEBPACK_IMPORTED_MODULE_1__.a)(`div`, {
          target: `e14mcdao0`,
        })(`font-family:sans-serif;padding:2rem;h1{font-size:2rem;margin:0;}`)
      __webpack_exports__.a = function() {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
          Welcome,
          null,
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            `h1`,
            null,
            `Welcome to Gatsby Interface`
          ),
          react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
            `p`,
            null,
            `Shared User Interface components for use with Gatsby Cloud`
          )
        )
      }
    },
    354: function(module, exports, __webpack_require__) {
      __webpack_require__(355),
        __webpack_require__(440),
        (module.exports = __webpack_require__(441))
    },
    4: function(module, __webpack_exports__, __webpack_require__) {
      "use strict"
      let palette = {
          purple: {
            900: `#362066`,
            800: `#452475`,
            700: `#542C85`,
            600: `#663399`,
            500: `#8a4baf`,
            400: `#B17ACC`,
            300: `#D9BAE8`,
            200: `#F1DEFA`,
            100: `#F6EDFA`,
            50: `#FCFAFF`,
          },
          orange: {
            900: `#db3a00`,
            800: `#e65800`,
            700: `#F67300`,
            600: `#FB8400`,
            500: `#FFB238`,
            400: `#FFD280`,
            300: `#FFE4A1`,
            200: `#FFEDBF`,
            100: `#FFF4DB`,
            50: `#FFFCF7`,
          },
          yellow: {
            900: `#8A6534`,
            800: `#BF9141`,
            700: `#E3A617`,
            600: `#FEC21E`,
            500: `#FED038`,
            400: `#FFDF37`,
            300: `#FFEB99`,
            200: `#FFF2A8`,
            100: `#FFF5BF`,
            50: `#FFFDF7`,
          },
          red: {
            900: `#B80000`,
            800: `#CE0009`,
            700: `#DA0013`,
            600: `#EC1818`,
            500: `#FA2915`,
            400: `#FF5A54`,
            300: `#FF8885`,
            200: `#FFBAB8`,
            100: `#FDE7E7`,
            50: `#FFFAFA`,
          },
          magenta: {
            900: `#690147`,
            800: `#7D0E59`,
            700: `#940159`,
            600: `#A6026A`,
            500: `#BC027F`,
            400: `#D459AB`,
            300: `#E899CE`,
            200: `#F2C4E3`,
            100: `#FFE6F6`,
            50: `#FFFAFD`,
          },
          blue: {
            900: `#004CA3`,
            800: `#006AC1`,
            700: `#047BD3`,
            600: `#0E8DE6`,
            500: `#0d96f2`,
            400: `#3FA9F5`,
            300: `#63B8F6`,
            200: `#90CDF9`,
            100: `#DBF0FF`,
            50: `#F5FCFF`,
          },
          teal: {
            900: `#008577`,
            800: `#10A39E`,
            700: `#00BDB6`,
            600: `#2DE3DA`,
            500: `#05F7F4`,
            400: `#73FFF7`,
            300: `#A6FFFA`,
            200: `#CCFFFC`,
            100: `#DCFFFD`,
            50: `#F7FFFF`,
          },
          green: {
            900: `#006500`,
            800: `#088413`,
            700: `#1D9520`,
            600: `#2CA72C`,
            500: `#37B635`,
            400: `#59C156`,
            300: `#79CD75`,
            200: `#A1DA9E`,
            100: `#DEF5DC`,
            50: `#F7FDF7`,
          },
          grey: {
            900: `#232129`,
            800: `#36313D`,
            700: `#48434F`,
            600: `#635E69`,
            500: `#7F7C82`,
            400: `#B7B5BD`,
            300: `#D9D7E0`,
            200: `#F0F0F2`,
            100: `#F5F5F5`,
            50: `#FBFBFB`,
          },
          black: `#000000`,
          white: `#ffffff`,
        };
        var colors = {
          gatsby: palette.purple[600],
          lilac: palette.purple[500],
          accent: palette.orange[500],
          lemon: palette.yellow[400],
          primaryBackground: palette.white,
          secondaryBackground: palette.grey[50],
          standardLine: palette.grey[200],
        };
        var fontFamilies = {
          headerFontFamily: [
            "Futura PT",
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Roboto",
            "Oxygen",
            "Ubuntu",
            "Cantarell",
            "Fira Sans",
            "Droid Sans",
            "Helvetica Neue",
            "Arial",
            "sans-serif",
          ].join(),
          bodyFontFamily: [
            "-apple-system",
            "BlinkMacSystemFont",
            "Segoe UI",
            "Roboto",
            "Helvetica Neue",
            "Arial",
            "Noto Sans",
            "sans-serif",
            "Apple Color Emoji",
            "Segoe UI Emoji",
            "Segoe UI Symbol",
            "Noto Color Emoji !important",
          ].join(),
          monospaceFontFamily: [
            "SFMono-Regular",
            "Menlo",
            "Monaco",
            "Consolas",
            "Liberation Mono",
            "Courier New",
            "monospace",
          ].join(),
        };
        var radius = { default: `4px`, large: `8px` }
      __webpack_require__.d(__webpack_exports__, `a`, function() {
        return colors
      }),
        __webpack_require__.d(__webpack_exports__, `c`, function() {
          return palette
        }),
        __webpack_require__.d(__webpack_exports__, `b`, function() {
          return fontFamilies
        }),
        __webpack_require__.d(__webpack_exports__, `d`, function() {
          return radius
        })
    },
    441: function(module, __webpack_exports__, __webpack_require__) {
      "use strict"
      __webpack_require__.r(__webpack_exports__),
        function(global, module) {
          let react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
            var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
            var _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              30
            );
            var _storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              343
            );
            var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              17
            );
            var _storybook_addon_console__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              220
            );
            var _storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              349
            );
            var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              18
            )
          ;(global.___loader = {
            enqueue: function enqueue() {},
            hovering: function hovering() {},
          }),
            (global.__PATH_PREFIX__ = ``),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(
              Object(
                _storybook_addon_info__WEBPACK_IMPORTED_MODULE_2__.withInfo
              )({ inline: !1, header: !0 })
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(
              _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.withKnobs
            )
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(
            function Space(storyFn) {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                `div`,
                {
                  style: {
                    margin: `30px 0`,
                    display: `flex`,
                    minHeight: `68vh`,
                    justifyContent: `center`,
                    alignItems: `center`,
                    padding: `10vh 20vh`,
                  },
                },
                storyFn()
              )
            }
          ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(
              function(storyFn, context) {
                return Object(
                  _storybook_addon_console__WEBPACK_IMPORTED_MODULE_4__.withConsole
                )()(storyFn)(context)
              }
            ),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.addDecorator)(
              _storybook_addon_a11y__WEBPACK_IMPORTED_MODULE_5__.withA11y
            )
          let req = __webpack_require__(749)
          __webpack_require__(342),
            (window.___navigate = function(pathname) {
              Object(
                _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_6__.action
              )(`NavigateTo:`)(pathname)
            }),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.configure)(
              function loadStories() {
                req.keys().forEach(function(filename) {
                  return req(filename)
                })
              },
              module
            )
        }.call(this, __webpack_require__(13), __webpack_require__(110)(module))
    },
    496: function(module, exports, __webpack_require__) {
      let map = { "./nestedObjectAssign": 278, "./nestedObjectAssign.js": 278 }
      function webpackContext(req) {
        let id = webpackContextResolve(req)
        return __webpack_require__(id)
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          let e = new Error(`Cannot find module '` + req + `'`)
          throw ((e.code = `MODULE_NOT_FOUND`), e)
        }
        return map[req]
      }
      ;(webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map)
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 496)
    },
    749: function(module, exports, __webpack_require__) {
      let map = {
        "./Button.stories.js": 750,
        "./Link.stories.js": 761,
        "./Welcome.stories.js": 342,
      }
      function webpackContext(req) {
        let id = webpackContextResolve(req)
        return __webpack_require__(id)
      }
      function webpackContextResolve(req) {
        if (!__webpack_require__.o(map, req)) {
          let e = new Error(`Cannot find module '` + req + `'`)
          throw ((e.code = `MODULE_NOT_FOUND`), e)
        }
        return map[req]
      }
      ;(webpackContext.keys = function webpackContextKeys() {
        return Object.keys(map)
      }),
        (webpackContext.resolve = webpackContextResolve),
        (module.exports = webpackContext),
        (webpackContext.id = 749)
    },
    750: function(module, __webpack_exports__, __webpack_require__) {
      "use strict"
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            `withStorySource`,
            function() {
              return withStorySource
            }
          ),
            __webpack_require__.d(__webpack_exports__, `__STORY__`, function() {
              return __STORY__
            }),
            __webpack_require__.d(
              __webpack_exports__,
              `__ADDS_MAP__`,
              function() {
                return __ADDS_MAP__
              }
            )
          var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
            var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
            var _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              30
            );
            var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              18
            );
            var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = (__webpack_require__(
              752
            ),
            __webpack_require__(87));
            var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              17
            );
            var _src_components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
              33
            );
            var withStorySource = __webpack_require__(217).withStorySource;
            var __STORY__ =
              "import React, { Fragment } from 'react';\n\nimport { storiesOf } from '@storybook/react';\nimport { action } from '@storybook/addon-actions';\nimport { linkTo } from '@storybook/addon-links';\nimport { MdArrowForward } from 'react-icons/md';\nimport { radios, boolean } from '@storybook/addon-knobs';\n\nimport {\n  BaseButton,\n  PrimaryButton,\n  SecondaryButton,\n  ButtonSkeleton,\n  CancelButton,\n  PrimaryDeleteButton,\n  SecondaryDeleteButton,\n  SuccessButton,\n  TextButton,\n} from '../src/components/Button';\n\nconst sizes = {\n  S: `S`,\n  M: `M`,\n  L: `L`,\n  XL: `XL`,\n};\n\nstoriesOf(`Button`, module)\n  .add(`ButtonSkeleton`, () => <ButtonSkeleton onClick={action(`Button was clicked`)}>ButtonSkeleton</ButtonSkeleton>, {\n    info: {\n      text: `\n          It's a functional building block, on which all other Button components are build on. \n          **Never used directly** in the codebase.\n        `,\n    },\n  })\n  .add(`BaseButton`, () => (\n    <BaseButton onClick={action(`Button was clicked`)} size={radios(`size`, sizes, `L`)}>\n      BaseButton\n    </BaseButton>\n  ))\n  .add(`PrimaryButton`, () => (\n    <PrimaryButton\n      onClick={action(`Button was clicked`)}\n      size={radios(`size`, sizes, `L`)}\n      disabled={boolean(`disabled`, false)}\n    >\n      PrimaryButton\n    </PrimaryButton>\n  ))\n  .add(`SecondaryButton`, () => (\n    <SecondaryButton\n      onClick={action(`Button was clicked`)}\n      size={radios(`size`, sizes, `L`)}\n      disabled={boolean(`disabled`, false)}\n    >\n      SecondaryButton\n    </SecondaryButton>\n  ))\n  .add(`CancelButton`, () => (\n    <CancelButton onClick={action(`Button was clicked`)} size={radios(`size`, sizes, `L`)}>\n      CancelButton\n    </CancelButton>\n  ))\n  .add(`PrimaryDeleteButton`, () => (\n    <PrimaryDeleteButton\n      onClick={action(`Button was clicked`)}\n      size={radios(`size`, sizes, `L`)}\n      disabled={boolean(`disabled`, false)}\n    >\n      PrimaryDeleteButton\n    </PrimaryDeleteButton>\n  ))\n  .add(`SecondaryDeleteButton`, () => (\n    <SecondaryDeleteButton\n      onClick={action(`Button was clicked`)}\n      size={radios(`size`, sizes, `L`)}\n      disabled={boolean(`disabled`, false)}\n    >\n      SecondaryDeleteButton\n    </SecondaryDeleteButton>\n  ))\n  .add(`SuccessButton`, () => (\n    <SuccessButton\n      onClick={action(`Button was clicked`)}\n      size={radios(`size`, sizes, `L`)}\n      disabled={boolean(`disabled`, false)}\n    >\n      SuccessButton\n    </SuccessButton>\n  ))\n  .add(`TextButton`, () => (\n    <TextButton onClick={action(`Button was clicked`)} size={radios(`size`, sizes, `L`)}>\n      TextButton\n    </TextButton>\n  ));\n\nstoriesOf(`Button/in use`, module)\n  .add(`Button as an external link`, () => (\n    <PrimaryButton href=\"https://gatsbyjs.com\" onClick={action(`Button was clicked`)}>\n      Button as &lt;a&gt; tag\n    </PrimaryButton>\n  ))\n  .add(`Button as a Gatsby Link`, () => (\n    <PrimaryButton to=\"/\" onClick={action(`Button was clicked`)}>\n      Button as &lt;Link&gt;\n    </PrimaryButton>\n  ))\n  .add(`Button with icon`, () => (\n    <PrimaryButton onClick={action(`Button was clicked`)}>\n      ButtonWithIcon <MdArrowForward />\n    </PrimaryButton>\n  ))\n  .add(`Button in loading state`, () => (\n    <PrimaryButton onClick={action(`Button was clicked`)} loading={boolean(`loading`, true)}>\n      Button\n    </PrimaryButton>\n  ));\n";
            var __ADDS_MAP__ = {};
            var sizes = { S: `S`, M: `M`, L: `L`, XL: `XL` }
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            `Button`,
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .add(
              `ButtonSkeleton`,
              function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src_components_Button__WEBPACK_IMPORTED_MODULE_6__.b,
                  {
                    onClick: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                    )(`Button was clicked`),
                  },
                  `ButtonSkeleton`
                )
              },
              {
                info: {
                  text:
                    `\n          It's a functional building block, on which all other Button components are build on. \n          **Never used directly** in the codebase.\n        `,
                },
              }
            )
            .add(`BaseButton`, function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_components_Button__WEBPACK_IMPORTED_MODULE_6__.a,
                {
                  onClick: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                  )(`Button was clicked`),
                  size: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.radios
                  )(`size`, sizes, `L`),
                },
                `BaseButton`
              )
            })
            .add(`PrimaryButton`, function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_components_Button__WEBPACK_IMPORTED_MODULE_6__.d,
                {
                  onClick: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                  )(`Button was clicked`),
                  size: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.radios
                  )(`size`, sizes, `L`),
                  disabled: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean
                  )(`disabled`, !1),
                },
                `PrimaryButton`
              )
            })
            .add(`SecondaryButton`, function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_components_Button__WEBPACK_IMPORTED_MODULE_6__.f,
                {
                  onClick: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                  )(`Button was clicked`),
                  size: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.radios
                  )(`size`, sizes, `L`),
                  disabled: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean
                  )(`disabled`, !1),
                },
                `SecondaryButton`
              )
            })
            .add(`CancelButton`, function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_components_Button__WEBPACK_IMPORTED_MODULE_6__.c,
                {
                  onClick: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                  )(`Button was clicked`),
                  size: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.radios
                  )(`size`, sizes, `L`),
                },
                `CancelButton`
              )
            })
            .add(`PrimaryDeleteButton`, function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_components_Button__WEBPACK_IMPORTED_MODULE_6__.e,
                {
                  onClick: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                  )(`Button was clicked`),
                  size: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.radios
                  )(`size`, sizes, `L`),
                  disabled: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean
                  )(`disabled`, !1),
                },
                `PrimaryDeleteButton`
              )
            })
            .add(`SecondaryDeleteButton`, function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_components_Button__WEBPACK_IMPORTED_MODULE_6__.g,
                {
                  onClick: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                  )(`Button was clicked`),
                  size: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.radios
                  )(`size`, sizes, `L`),
                  disabled: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean
                  )(`disabled`, !1),
                },
                `SecondaryDeleteButton`
              )
            })
            .add(`SuccessButton`, function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_components_Button__WEBPACK_IMPORTED_MODULE_6__.h,
                {
                  onClick: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                  )(`Button was clicked`),
                  size: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.radios
                  )(`size`, sizes, `L`),
                  disabled: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean
                  )(`disabled`, !1),
                },
                `SuccessButton`
              )
            })
            .add(`TextButton`, function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_components_Button__WEBPACK_IMPORTED_MODULE_6__.i,
                {
                  onClick: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                  )(`Button was clicked`),
                  size: Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.radios
                  )(`size`, sizes, `L`),
                },
                `TextButton`
              )
            }),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              `Button/in use`,
              module
            )
              .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
              .add(`Button as an external link`, function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src_components_Button__WEBPACK_IMPORTED_MODULE_6__.d,
                  {
                    href: `https://gatsbyjs.com`,
                    onClick: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                    )(`Button was clicked`),
                  },
                  `Button as <a> tag`
                )
              })
              .add(`Button as a Gatsby Link`, function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src_components_Button__WEBPACK_IMPORTED_MODULE_6__.d,
                  {
                    to: `/`,
                    onClick: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                    )(`Button was clicked`),
                  },
                  `Button as <Link>`
                )
              })
              .add(`Button with icon`, function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src_components_Button__WEBPACK_IMPORTED_MODULE_6__.d,
                  {
                    onClick: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                    )(`Button was clicked`),
                  },
                  `ButtonWithIcon `,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_icons_md__WEBPACK_IMPORTED_MODULE_4__.a,
                    null
                  )
                )
              })
              .add(`Button in loading state`, function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src_components_Button__WEBPACK_IMPORTED_MODULE_6__.d,
                  {
                    onClick: Object(
                      _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                    )(`Button was clicked`),
                    loading: Object(
                      _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_5__.boolean
                    )(`loading`, !0),
                  },
                  `Button`
                )
              })
        }.call(this, __webpack_require__(110)(module))
    },
    761: function(module, __webpack_exports__, __webpack_require__) {
      "use strict"
      __webpack_require__.r(__webpack_exports__),
        function(module) {
          __webpack_require__.d(
            __webpack_exports__,
            `withStorySource`,
            function() {
              return withStorySource
            }
          ),
            __webpack_require__.d(__webpack_exports__, `__STORY__`, function() {
              return __STORY__
            }),
            __webpack_require__.d(
              __webpack_exports__,
              `__ADDS_MAP__`,
              function() {
                return __ADDS_MAP__
              }
            )
          let react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
            var react__WEBPACK_IMPORTED_MODULE_0___default = __webpack_require__.n(
              react__WEBPACK_IMPORTED_MODULE_0__
            );
            var _storybook_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
              30
            );
            var _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
              18
            );
            var _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
              17
            );
            var react_icons_md__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
              87
            );
            var _src_components_Link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
              88
            )
          function _defineProperty(obj, key, value) {
            return (
              key in obj
                ? Object.defineProperty(obj, key, {
                    value: value,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0,
                  })
                : (obj[key] = value),
              obj
            )
          }
          var withStorySource = __webpack_require__(217).withStorySource;
            var __STORY__ =
              "import React, { Fragment } from 'react';\n\nimport { storiesOf } from '@storybook/react';\nimport { action } from '@storybook/addon-actions';\nimport { text, boolean } from '@storybook/addon-knobs';\nimport { MdArrowForward } from 'react-icons/md';\n\nimport { LinkSkeleton, BaseLink, Link, SimpleLink } from '../src/components/Link';\n\nconst getLinkType = () => {\n  if (boolean(`Internal link`, true)) return { to: text('Url', '/') };\n  else return { href: text('Url', '#') };\n};\n\nconst linkProps = () => ({\n  ...getLinkType(),\n  onClick: action(`Link was clicked`),\n});\n\nstoriesOf(`Link`, module)\n  .add(`LinkSkeleton`, () => <LinkSkeleton {...linkProps()}>LinkSkeleton</LinkSkeleton>, {\n    info: {\n      text: `\n          It's a functional building block, on which all other Link components are built on. \n          **Never used directly** in the codebase.\n        `,\n    },\n  })\n  .add(`BaseLink`, () => <BaseLink {...linkProps()}>BaseLink</BaseLink>)\n  .add('Link', () => <Link {...linkProps()}>Link</Link>)\n  .add(`SimpleLink`, () => <SimpleLink {...linkProps()}>SimpleLink</SimpleLink>);\n\nstoriesOf(`Link/in use`, module)\n  .add(`Link with icon`, () => (\n    <Link {...linkProps()}>\n      LinkWithIcon <MdArrowForward />\n    </Link>\n  ))\n  .add(`SimpleLink with icon`, () => (\n    <SimpleLink {...linkProps()}>\n      LinkWithIcon <MdArrowForward />\n    </SimpleLink>\n  ));\n";
            var __ADDS_MAP__ = {};
            var linkProps = function linkProps() {
              return (function _objectSpread(target) {
                for (let i = 1; i < arguments.length; i++) {
                  var source = null != arguments[i] ? arguments[i] : {};
                    var ownKeys = Object.keys(source)
                  `function` == typeof Object.getOwnPropertySymbols &&
                    (ownKeys = ownKeys.concat(
                      Object.getOwnPropertySymbols(source).filter(function(
                        sym
                      ) {
                        return Object.getOwnPropertyDescriptor(source, sym)
                          .enumerable
                      })
                    )),
                    ownKeys.forEach(function(key) {
                      _defineProperty(target, key, source[key])
                    })
                }
                return target
              })(
                {},
                (function getLinkType() {
                  return Object(
                    _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.boolean
                  )(`Internal link`, !0)
                    ? {
                        to: Object(
                          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                        )(`Url`, `/`),
                      }
                    : {
                        href: Object(
                          _storybook_addon_knobs__WEBPACK_IMPORTED_MODULE_3__.text
                        )(`Url`, `#`),
                      }
                })(),
                {
                  onClick: Object(
                    _storybook_addon_actions__WEBPACK_IMPORTED_MODULE_2__.action
                  )(`Link was clicked`),
                }
              )
            }
          Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
            `Link`,
            module
          )
            .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
            .add(
              `LinkSkeleton`,
              function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src_components_Link__WEBPACK_IMPORTED_MODULE_5__.c,
                  linkProps(),
                  `LinkSkeleton`
                )
              },
              {
                info: {
                  text:
                    `\n          It's a functional building block, on which all other Link components are built on. \n          **Never used directly** in the codebase.\n        `,
                },
              }
            )
            .add(`BaseLink`, function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_components_Link__WEBPACK_IMPORTED_MODULE_5__.a,
                linkProps(),
                `BaseLink`
              )
            })
            .add(`Link`, function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_components_Link__WEBPACK_IMPORTED_MODULE_5__.b,
                linkProps(),
                `Link`
              )
            })
            .add(`SimpleLink`, function() {
              return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                _src_components_Link__WEBPACK_IMPORTED_MODULE_5__.d,
                linkProps(),
                `SimpleLink`
              )
            }),
            Object(_storybook_react__WEBPACK_IMPORTED_MODULE_1__.storiesOf)(
              `Link/in use`,
              module
            )
              .addDecorator(withStorySource(__STORY__, __ADDS_MAP__))
              .add(`Link with icon`, function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src_components_Link__WEBPACK_IMPORTED_MODULE_5__.b,
                  linkProps(),
                  `LinkWithIcon `,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_icons_md__WEBPACK_IMPORTED_MODULE_4__.a,
                    null
                  )
                )
              })
              .add(`SimpleLink with icon`, function() {
                return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                  _src_components_Link__WEBPACK_IMPORTED_MODULE_5__.d,
                  linkProps(),
                  `LinkWithIcon `,
                  react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(
                    react_icons_md__WEBPACK_IMPORTED_MODULE_4__.a,
                    null
                  )
                )
              })
        }.call(this, __webpack_require__(110)(module))
    },
    88: function(module, __webpack_exports__, __webpack_require__) {
      "use strict"
      let react = __webpack_require__(0);
        var react_default = __webpack_require__.n(react);
        var prop_types = __webpack_require__(2);
        var prop_types_default = __webpack_require__.n(prop_types);
        var index_esm = __webpack_require__(7);
        var gatsby_browser_entry = __webpack_require__(101)
      function _extends() {
        return (_extends =
          Object.assign ||
          function(target) {
            for (let i = 1; i < arguments.length; i++) {
              let source = arguments[i]
              for (let key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key])
            }
            return target
          }).apply(this, arguments)
      }
      function _objectWithoutProperties(source, excluded) {
        if (null == source) return {}
        let key;
          var i;
          var target = (function _objectWithoutPropertiesLoose(source, excluded) {
            if (null == source) return {}
            let key;
              var i;
              var target = {};
              var sourceKeys = Object.keys(source)
            for (i = 0; i < sourceKeys.length; i++)
              (key = sourceKeys[i]),
                excluded.indexOf(key) >= 0 || (target[key] = source[key])
            return target
          })(source, excluded)
        if (Object.getOwnPropertySymbols) {
          let sourceSymbolKeys = Object.getOwnPropertySymbols(source)
          for (i = 0; i < sourceSymbolKeys.length; i++)
            (key = sourceSymbolKeys[i]),
              excluded.indexOf(key) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(source, key) &&
                  (target[key] = source[key]))
        }
        return target
      }
      function _defineProperty(obj, key, value) {
        return (
          key in obj
            ? Object.defineProperty(obj, key, {
                value: value,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (obj[key] = value),
          obj
        )
      }
      let SkeletonStyledComponent = Object(index_esm.a)(
          gatsby_browser_entry.a,
          { target: `eh7fx5n0` }
        )();
        var linkPropTypes = {
          href: prop_types_default.a.string,
          to: prop_types_default.a.string,
        };
        var linkSkeletonPropTypes = (function _objectSpread(target) {
          for (var i = 1; i < arguments.length; i++) {
            var source = null != arguments[i] ? arguments[i] : {},
              ownKeys = Object.keys(source)
            "function" == typeof Object.getOwnPropertySymbols &&
              (ownKeys = ownKeys.concat(
                Object.getOwnPropertySymbols(source).filter(function(sym) {
                  return Object.getOwnPropertyDescriptor(source, sym).enumerable
                })
              )),
              ownKeys.forEach(function(key) {
                _defineProperty(target, key, source[key])
              })
          }
          return target
        })({}, linkPropTypes, { StyledComponent: prop_types_default.a.any });
        var linkSkeletonDefaultPropTypes = {
          StyledComponent: SkeletonStyledComponent,
        };
        var Link_Skeleton_LinkSkeleton = function LinkSkeleton(_ref) {
          let StyledComponent = _ref.StyledComponent;
            var children = _ref.children;
            var href = _ref.href;
            var to = _ref.to;
            var rest = _objectWithoutProperties(_ref, [
              `StyledComponent`,
              `children`,
              `href`,
              `to`,
            ])
          if (href) {
            let ComponentAsExternalLink = StyledComponent.withComponent(`a`, {
              target: `eh7fx5n1`,
            })
            return react_default.a.createElement(
              ComponentAsExternalLink,
              { href: href },
              children
            )
          }
          return to
            ? react_default.a.createElement(
                StyledComponent,
                _extends({ to: to }, rest),
                children
              )
            : null
        }
      ;(Link_Skeleton_LinkSkeleton.propTypes = linkSkeletonPropTypes),
        (Link_Skeleton_LinkSkeleton.defaultProps = linkSkeletonDefaultPropTypes)
      let Link_Skeleton = Link_Skeleton_LinkSkeleton
      function BaseLink_extends() {
        return (BaseLink_extends =
          Object.assign ||
          function(target) {
            for (let i = 1; i < arguments.length; i++) {
              let source = arguments[i]
              for (let key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key])
            }
            return target
          }).apply(this, arguments)
      }
      Link_Skeleton_LinkSkeleton.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `LinkSkeleton`,
        props: {
          StyledComponent: {
            defaultValue: { value: `styled(Link)\`\``, computed: !1 },
            type: { name: `any` },
            required: !1,
            description: ``,
          },
          href: { type: { name: `string` }, required: !1, description: `` },
          to: { type: { name: `string` }, required: !1, description: `` },
        },
      }
      let StyledBaseLink = Object(index_esm.a)(SkeletonStyledComponent, {
          target: `e11a56hn0`,
        })(
          `align-items:center;display:inline-flex;font-size:inherit;font-family:inherit;font-style:inherit;font-weight:inherit;`
        );
        var BaseLink_BaseLink = function BaseLink(props) {
          return react_default.a.createElement(
            Link_Skeleton,
            BaseLink_extends({ StyledComponent: StyledBaseLink }, props)
          )
        }
      BaseLink_BaseLink.propTypes = linkPropTypes
      let Link_BaseLink = BaseLink_BaseLink
      BaseLink_BaseLink.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `BaseLink`,
        composes: [`./Link.Skeleton`],
      }
      let presets = __webpack_require__(4)
      function Link_extends() {
        return (Link_extends =
          Object.assign ||
          function(target) {
            for (let i = 1; i < arguments.length; i++) {
              let source = arguments[i]
              for (let key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key])
            }
            return target
          }).apply(this, arguments)
      }
      let StyledLink = Object(index_esm.a)(StyledBaseLink, {
          target: `e13la78x0`,
        })(`color:`, presets.c.purple[600], `;`);
        var Link_Link = function Link(props) {
          return react_default.a.createElement(
            Link_Skeleton,
            Link_extends({ StyledComponent: StyledLink }, props)
          )
        }
      Link_Link.propTypes = linkPropTypes
      let components_Link_Link = Link_Link
      function SimpleLink_extends() {
        return (SimpleLink_extends =
          Object.assign ||
          function(target) {
            for (let i = 1; i < arguments.length; i++) {
              let source = arguments[i]
              for (let key in source)
                Object.prototype.hasOwnProperty.call(source, key) &&
                  (target[key] = source[key])
            }
            return target
          }).apply(this, arguments)
      }
      Link_Link.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `Link`,
        composes: [`./Link.Skeleton`],
      }
      let SimpleLink_StyledLink = Object(index_esm.a)(StyledBaseLink, {
          target: `e17rooua0`,
        })(
          `color:`,
          presets.c.purple[600],
          `;text-decoration:none;:focus,:hover{color:`,
          presets.c.purple[400],
          `;text-decoration:underline;}`
        );
        var SimpleLink_SimpleLink = function SimpleLink(props) {
          return react_default.a.createElement(
            Link_Skeleton,
            SimpleLink_extends(
              { StyledComponent: SimpleLink_StyledLink },
              props
            )
          )
        }
      SimpleLink_SimpleLink.propTypes = linkPropTypes
      let Link_SimpleLink = SimpleLink_SimpleLink
      ;(SimpleLink_SimpleLink.__docgenInfo = {
        description: ``,
        methods: [],
        displayName: `SimpleLink`,
        composes: [`./Link.Skeleton`],
      }),
        __webpack_require__.d(__webpack_exports__, `c`, function() {
          return Link_Skeleton
        }),
        __webpack_require__.d(__webpack_exports__, `a`, function() {
          return Link_BaseLink
        }),
        __webpack_require__.d(__webpack_exports__, `b`, function() {
          return components_Link_Link
        }),
        __webpack_require__.d(__webpack_exports__, `d`, function() {
          return Link_SimpleLink
        })
    },
  },
  [[354, 1, 2]],
])
// # sourceMappingURL=main.7a4b5423ed80594a3d68.bundle.js.map
