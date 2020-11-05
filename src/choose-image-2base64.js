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
import {
  filePath2Base64,
  blob2Base64
} from './util.js';

/**
 * 选择图片转换为Base64格式输出
 * @return {Promise<string>} 返回图片的Base64编码
 */
export default async function chooseImage2Base64() {
  return new Promise(async (resolve, reject) => {
    try {
      let [error, res] = await uni.chooseImage({
        count: 1,
      });
      if (error) {
        throw new Error(error);
      }
      // #ifdef H5
      if (!/^image/.test(res.tempFiles[0].type)) {
        throw new Error('文件类型错误');
      }
      // #endif
      const tempFilePath = res.tempFilePaths[0];
      let base64Data = '';
      // #ifdef H5
      base64Data = await blob2Base64(res.tempFiles[0]);
      base64Data = (/.+;\s*base64\s*,\s*(.+)$/i.exec(base64Data) || [])[1];
      resolve(base64Data);
      // #endif
      // #ifdef MP
      base64Data = await uni.getFileSystemManager().readFile({
        filePath: tempFilePath,
        encoding: "base64",
        success: ({
          data
        }) => {
          resolve(data);
        },
      });
      // #endif
      // #ifdef APP-PLUS
      base64Data = await filePath2Base64(tempFilePath);
      base64Data = (/.+;\s*base64\s*,\s*(.+)$/i.exec(base64Data) || [])[1];
      resolve(base64Data);
      // #endif
    } catch (error) {
      throw new Error(error);
    }
  })
}
