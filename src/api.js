/*
 * Copyright (C) 2020 Tencent Cloud.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

function ocr() {}

// 参数首字母大写转换
function toUpperCase(obj) {
  if (typeof obj === "object") {
    const formatObj = Object.keys(obj).reduce((newObj, key) => {
      let newKey = key.substring(0, 1).toUpperCase() + key.substring(1);
      newObj[newKey] = obj[key];
      return newObj;
    }, {});
    return formatObj;
  } else {
    throw new Error('参数需要为object类型')
  }
}

function simpleOCR(name) {
  if (!name) new Error("请传入OCR对应Action名称");
  return async function (args) {
    if (!args.imageBase64 && !args.imageUrl) {
      throw new Error("请传入图片");
    }
    try {
      // 将参数key的首字母大写
      const payload = toUpperCase(args);
      // 调用云函数来进行OCR识别
      const result = await uniCloud.callFunction({
        name: "tencentcloud-plugin",
        data: {
          module: "OCR",
          action: "getOcrResult",
          name: name,
          payload,
        },
      });
      return result
    } catch (e) {
      throw new Error(e);
    }
  };
}

const function_names = [
  // 通用文字识别
  "GeneralBasicOCR",
  "GeneralAccurateOCR",
  "GeneralEfficientOCR",
  "GeneralFastOCR",
  "EnglishOCR",
  "GeneralHandwritingOCR",
  "QrcodeOCR",
  "TextDetect",
  // 行业文档识别
  "TableOCR",
  "ArithmeticOCR",
  "FormulaOCR",
  "EduPaperOCR",
  "InsuranceBillOCR",
  "SealOCR",
  // 卡证文字识别相关接口
  "MLIDPassportOCR",
  "MainlandPermitOCR",
  "HmtResidentPermitOCR",
  "ResidenceBookletOCR",
  "PropOwnerCertOCR",
  "BusinessCardOCR",
  "BizLicenseOCR",
  "BankCardOCR",
  "OrgCodeCertOCR",
  "InstitutionOCR",
  "EstateCertOCR",
  "EnterpriseLicenseOCR",
  "PassportOCR",
  "PermitOCR",
  "IdCardOCR",
  // 票据单据
  "VatInvoiceOCR",
  "WaybillOCR",
  "FinanBillSliceOCR",
  "FinanBillOCR",
  "VatRollInvoiceOCR",
  "TollInvoiceOCR",
  "ShipInvoiceOCR",
  "MixedInvoiceOCR",
  "MixedInvoiceDetect",
  "InvoiceGeneralOCR",
  "BusInvoiceOCR",
  "TrainTicketOCR",
  "DutyPaidProofOCR",
  "TaxiInvoiceOCR",
  "QuotaInvoiceOCR",
  "FlightInvoiceOCR",
  "CarInvoiceOCR",
  // 汽车场景识别相关接口
  "VehicleLicenseOCR",
  "LicensePlateOCR",
  "DriverLicenseOCR",
  "VinOCR",
  "VehicleRegCertOCR",
];

// 注册OCR函数
for (var i = 0; i < function_names.length; i++) {
  let name = function_names[i];
  ocr[name.charAt(0).toLowerCase() + name.slice(1)] = simpleOCR(
    function_names[i]
  );
}

export default ocr;
