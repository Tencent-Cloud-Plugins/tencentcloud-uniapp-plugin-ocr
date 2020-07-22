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

/**
 * 卡证文字-港澳台居住证识别 https://cloud.tencent.com/document/product/866/43106
 * @param {object} params - 参数包装对象
 * @param {string} params.imageBase64 需要识别图片的base64编码
 * @param {string} params.imageUrl 需要识别图片的url
 * @param {string} [params.cardSide] - FRONT：有照片的一面（人像面），BACK：无照片的一面（国徽面），该参数如果不填或填错，将为您自动判断正反面。
 * @returns {Promise<object>} - 检测到的证件信息
 */
import ocr from "./api.js";
export default function hmtResidentPermitOCR({
  imageBase64,
  imageUrl,
  cardSide,
}) {
  return ocr.hmtResidentPermitOCR({ imageBase64, imageUrl, cardSide });
}
