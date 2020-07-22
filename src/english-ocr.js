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
 * 通用文字-英文识别接口 https://cloud.tencent.com/document/product/866/34938
 * @param {object} params - 参数包装对象
 * @param {string} params.imageBase64 需要识别图片的base64编码
 * @param {string} params.imageUrl 需要识别图片的url
 * @param {boolean} [params.enableCoordPoint] - 单词四点坐标开关，开启可返回图片中单词的四点坐标。该参数默认值为false。
 * @param {boolean} [params.enableCandWord] - 候选字开关，开启可返回识别时多个可能的候选字（每个候选字对应其置信度）。该参数默认值为false。
 * @returns {Promise<object>} TextDetections - 检测到的文本信息
 */
import ocr from "./api.js";
export default function englishOCR({
  imageBase64,
  imageUrl,
  enableCoordPoint,
  enableCandWord,
}) {
  return ocr.englishOCR({
    imageBase64,
    imageUrl,
    enableCoordPoint,
    enableCandWord,
  });
}
