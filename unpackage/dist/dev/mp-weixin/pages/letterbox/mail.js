"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {
  data() {
    return {
      loopData0: [
        {
          lanhutext0: "101",
          lanhutext1: "李四",
          lanhutext2: "2025年1月1日",
          lanhuimage0: "https://lanhu-oss-2537-2.lanhuapp.com/FigmaDDSSlicePNG3407d3dc072a8daf7d9984d4c551ca79.png",
          slot1: 1
        },
        {
          lanhutext0: "101",
          lanhutext1: "李四",
          lanhutext2: "xxxxx",
          lanhuimage0: "https://lanhu-oss-2537-2.lanhuapp.com/FigmaDDSSlicePNG3407d3dc072a8daf7d9984d4c551ca79.png"
        }
      ],
      constants: {}
    };
  },
  methods: {}
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($data.loopData0, (item, index, i0) => {
      return common_vendor.e({
        a: item.lanhutext0,
        b: item.lanhutext1,
        c: item.slot1 === 1
      }, item.slot1 === 1 ? {} : {}, {
        d: item.lanhutext2,
        e: index
      });
    }),
    b: common_assets._imports_0$3,
    c: common_assets._imports_2,
    d: common_assets._imports_2$1,
    e: common_assets._imports_0$3,
    f: common_assets._imports_0$4
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render]]);
wx.createPage(MiniProgramPage);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/letterbox/mail.js.map
