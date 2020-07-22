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

"use strict";
// OCR API
// ===行业文档识别接口===
import tableOCR from "./table-ocr.js"; // 表格识别
import arithmeticOCR from "./arithmetic-ocr.js"; // 算式识别
import formulaOCR from "./formula-ocr.js"; // 数学公式识别
import eduPaperOCR from "./edu-paper-ocr.js"; // 数学试题识别
import insuranceBillOCR from "./insurance-bill-ocr.js"; // 保险单据识别
import sealOCR from "./seal-ocr"; // 印章识别

// ===卡证文字识别相关接口===
import mlidPassportOCR from "./mlid-passport-ocr.js"; // 护照识别（港澳台地区及境外护照）
import mainlandPermitOCR from "./mainland-permit-ocr.js"; // 港澳台来往内地通行证识别
import hmtResidentPermitOCR from "./hmt-resident-permit-ocr.js"; // 港澳台居住证识别
import residenceBookletOCR from "./residence-booklet-ocr.js"; // 户口本识别
import propOwnerCertOCR from "./prop-owner-cert-ocr.js"; // 房产证识别接口
import businessCardOCR from "./business-card-ocr.js"; // 名片识别
import bizLicenseOCR from "./biz-license-ocr.js"; // 营业执照识别
import bankCardOCR from "./bank-card-ocr"; // 银行卡识别
import orgCodeCertOCR from "./org-code-cert-ocr"; // 组织机构代码证识别
import institutionOCR from "./institution-ocr"; // 事业单位法人证书识别
import estateCertOCR from "./estate-cert-ocr"; // 不动产权证识别
import enterpriseLicenseOCR from "./enterprise-license-ocr"; // 企业证照识别
import passportOCR from "./passport-ocr"; // 护照识别（中国大陆地区护照）
import permitOCR from "./permit-ocr"; // 港澳台通行证识别
import idCardOCR from "./id-card-ocr"; // 身份证识别

// ===票据单据识别接口===
import vatInvoiceOCR from "./vat-invoice-ocr"; // 增值税发票识别
import waybillOCR from "./waybill-ocr"; // 运单识别
import finanBillSliceOCR from "./finan-bill-slice-ocr"; // 金融票据切片识别
import finanBillOCR from "./finan-bill-ocr"; // 金融票据整单识别
import vatRollInvoiceOCR from "./vat-roll-invoice-ocr"; // 增值税发票（卷票）识别
import tollInvoiceOCR from "./toll-invoice-ocr"; // 过路过桥费发票识别
import shipInvoiceOCR from "./ship-invoice-ocr"; // 轮船票识别
import mixedInvoiceOCR from "./mixed-invoice-ocr"; // 混贴票据识别
import mixedInvoiceDetect from "./mixed-invoice-detect"; // 混贴票据分类
import invoiceGeneralOCR from "./invoice-general-ocr"; // 通用机打发票识别
import busInvoiceOCR from "./bus-invoice-ocr"; // 汽车票识别
import trainTicketOCR from "./train-ticket-ocr"; // 火车票识别
import dutyPaidProofOCR from "./duty-paid-proof-ocr"; // 完税证明识别
import taxiInvoiceOCR from "./taxi-invoice-ocr"; // 出租车发票识别
import quotaInvoiceOCR from "./quota-invoice-ocr"; // 定额发票识别
import flightInvoiceOCR from "./flight-voice-ocr"; // 机票行程单识别
import carInvoiceOCR from "./car-invoice-ocr"; // 购车发票识别

// ===汽车场景相关接口===
import vehicleLicenseOCR from "./vehicle-license-ocr"; // 行驶证识别
import licensePlateOCR from "./license-plate-ocr"; // 车牌识别
import driverLicenseOCR from "./driver-license-ocr"; // 驾驶证识别
import vinOCR from "./vin-ocr"; // 车辆VIN码识别
import vehicleRegCertOCR from "./vehicle-reg-cert-ocr"; // 机动车登记证书识别

// ===通用文字识别接口===
import englishOCR from "@/js_sdk/tencentcloud-plugin-ocr/english-ocr.js"; // 英文识别接口
import generalBasicOCR from "@/js_sdk/tencentcloud-plugin-ocr/general-basic-ocr.js"; // 通用印刷体识别
import generalAccurateOCR from "@/js_sdk/tencentcloud-plugin-ocr/general-accurate-ocr.js"; // 通用印刷体识别（高精度版）
import generalEfficientOCR from "@/js_sdk/tencentcloud-plugin-ocr/general-efficient-ocr.js"; // 通用印刷体识别（精简版）
import generalFastOCR from "@/js_sdk/tencentcloud-plugin-ocr/general-fast-ocr.js"; // 通用印刷体识别（高速版）
import generalHandwritingOCR from "@/js_sdk/tencentcloud-plugin-ocr/general-handwriting-ocr.js"; // 通用手写体识别
import qrcodeOCR from "@/js_sdk/tencentcloud-plugin-ocr/qrcode-ocr.js"; // 二维码和条形码识别
import textDetect from "@/js_sdk/tencentcloud-plugin-ocr/text-detect.js"; // 快速文本检测

export {
  // ===行业文档识别接口===
  tableOCR,
  arithmeticOCR,
  formulaOCR,
  eduPaperOCR,
  insuranceBillOCR,
  sealOCR,
  // ===卡证文字识别相关接口===
  mlidPassportOCR,
  mainlandPermitOCR,
  hmtResidentPermitOCR,
  residenceBookletOCR,
  propOwnerCertOCR,
  businessCardOCR,
  bizLicenseOCR,
  bankCardOCR,
  orgCodeCertOCR,
  institutionOCR,
  estateCertOCR,
  enterpriseLicenseOCR,
  passportOCR,
  permitOCR,
  idCardOCR,
  // ===票据单据识别接口===
  vatInvoiceOCR,
  waybillOCR,
  finanBillSliceOCR,
  finanBillOCR,
  vatRollInvoiceOCR,
  tollInvoiceOCR,
  shipInvoiceOCR,
  mixedInvoiceOCR,
  mixedInvoiceDetect,
  invoiceGeneralOCR,
  busInvoiceOCR,
  trainTicketOCR,
  dutyPaidProofOCR,
  taxiInvoiceOCR,
  quotaInvoiceOCR,
  flightInvoiceOCR,
  carInvoiceOCR,
  // ===汽车场景识别相关接口===
  vehicleLicenseOCR,
  licensePlateOCR,
  driverLicenseOCR,
  vinOCR,
  vehicleRegCertOCR,
  // ===通用文字识别接口===
  englishOCR,
  generalBasicOCR,
  generalAccurateOCR,
  generalEfficientOCR,
  generalFastOCR,
  generalHandwritingOCR,
  qrcodeOCR,
  textDetect,
};
