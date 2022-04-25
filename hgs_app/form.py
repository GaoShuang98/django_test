# -- coding: utf-8 --
# @Time : 2022/4/25 22:05
# @Author : HGS
# @Email : huanggaoshuang123@163.com
# @File : form.py
# @Software: PyCharm

from django import forms  # 导入表单模块

class UploadFileForm(forms.Form):
    title = forms.CharField(max_length=50)  # 文件标题
    file = forms.FileField()  # 表单字段