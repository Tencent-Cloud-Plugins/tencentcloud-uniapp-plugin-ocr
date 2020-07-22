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
 * 选择图片转换为Base64格式输出
 * @return {Promise<string>} 返回图片的Base64编码
 */
export default async function chooseImage2Base64() {
    try {
      let [error, res] = await uni.chooseImage({
        count: 1,
      });
      if (error) {
        throw new Error(error);
      }
      if (!/^image/.test(res.tempFiles[0].type)) {
        throw new Error("文件类型错误");
      }
      uni.showLoading({
        mask: true,
      });
      let fileUrl = res.tempFilePaths[0];
      return urlTobase64(fileUrl);
    } catch (error) {
      throw new Error(error);
    } finally {
      uni.hideLoading();
    }
}

/**
 * 图片路径转换为base64格式
 * @param {object} url
 * @return {string} 返回图片的base64编码
 */
async function urlTobase64(url) {
  try {
    const [error, res] = await uni.request({
      url: url,
      method: "GET",
      responseType: "arraybuffer",
    });
    if (error) {
      throw new Error(error);
    }
    return wx.arrayBufferToBase64(res.data);
  } catch (e) {
    throw new Error(e);
  }
}
