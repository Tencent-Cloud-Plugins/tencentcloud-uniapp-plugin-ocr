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
 * 将本地文件路径转为base64
 * @param {string} filePath 需要转换的文件的本地路径
 * @returns {Promise<object>} result // base64格式的音频
 */
export async function filePath2Base64(filePath) {
  return new Promise((resolve, reject) => {
    try {
      plus.io.resolveLocalFileSystemURL(filePath, function(entry) {
        entry.file(function(file) {
          const fileReader = new plus.io.FileReader();
          fileReader.readAsDataURL(file, 'utf-8');
          fileReader.onloadend = function(evt) {
            resolve(evt.target.result);
          }
        });
      }, function(e) {
        reject(e.message);
      });
    } catch (error) {
      reject(error);
    }
  });
}

/**
 * blob文件转换base64格式
 * @param {object} blob 需要转换的文件
 * @returns {Promise<string>} result // base64格式的音频
 */
export async function blob2Base64(file) {
  return new Promise((resolve, reject) => {
    try {
      let fileReader = new FileReader();
      fileReader.onloadend = async () => {
        resolve(fileReader.result);
      };
      fileReader.readAsDataURL(file);
    } catch (error) {
      reject(error);
    }
  });
}
