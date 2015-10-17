from django import forms

class SearchForm(forms.Form):
    address = forms.CharField()
