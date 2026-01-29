from flask import Flask, render_template, request, redirect, url_for, session
import json
import os

app = Flask(__name__)
app.secret_key = 'portfolio_secret_key'

def load_data(lang='en'):
    """Carrega dados do JSON baseado no idioma"""
    file_path = f'lang/{lang}.json'
    if not os.path.exists(file_path):
        file_path = 'lang/en.json'  # fallback para inglês
    
    with open(file_path, 'r', encoding='utf-8') as f:
        return json.load(f)

def get_language():
    """Obtém idioma da sessão ou detecta automaticamente"""
    if 'lang' in session:
        return session['lang']
    
    # Detecção automática usando best_match
    lang = request.accept_languages.best_match(['pt', 'en'])
    return 'pt' if lang == 'pt' else 'en'

@app.route('/')
def index():
    lang = get_language()
    data = load_data(lang)
    return render_template('index.html', data=data, lang=lang)

@app.route('/lang/pt-br')
def set_portuguese():
    """Define idioma português na sessão"""
    session['lang'] = 'pt'
    return redirect(url_for('index'))

@app.route('/lang/en-us')
def set_english():
    """Define idioma inglês na sessão"""
    session['lang'] = 'en'
    return redirect(url_for('index'))

if __name__ == '__main__':
    app.run(debug=True)