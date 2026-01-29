#!/usr/bin/env python3
import json
import os
import shutil
import argparse
from jinja2 import Environment, FileSystemLoader

def load_data(lang_file):
    with open(lang_file, 'r', encoding='utf-8') as f:
        return json.load(f)

def render_template(template_path, data, lang):
    env = Environment(loader=FileSystemLoader(os.path.dirname(template_path)))
    template = env.get_template(os.path.basename(template_path))
    
    # Mock Flask's url_for function
    def url_for(endpoint, filename=None):
        if endpoint == 'static':
            return filename
        return '/'
    
    env.globals['url_for'] = url_for
    return template.render(data=data, lang=lang)

def build_static_site(output_dir='dist'):
    # Create output directory
    os.makedirs(output_dir, exist_ok=True)
    
    # Copy static files
    if os.path.exists('static'):
        shutil.copytree('static', f'{output_dir}/static', dirs_exist_ok=True)
    
    # Build for each language
    for lang_code in ['en', 'pt']:
        lang_file = f'lang/{lang_code}.json'
        if not os.path.exists(lang_file):
            continue
            
        data = load_data(lang_file)
        html_content = render_template('templates/index.html', data, lang_code)
        
        # Replace Flask template syntax with static content
        html_content = html_content.replace("{{ url_for('static', filename='css/style.css') }}", 'static/css/style.css')
        html_content = html_content.replace("{{ url_for('static', filename='images/profile.jpeg') }}", 'static/images/profile.jpeg')
        html_content = html_content.replace("{{ url_for('static', filename='./images/profile.jpeg') }}", 'static/images/profile.jpeg')
        
        # Write HTML file
        filename = 'index.html' if lang_code == 'en' else f'index-{lang_code}.html'
        with open(f'{output_dir}/{filename}', 'w', encoding='utf-8') as f:
            f.write(html_content)
    
    print(f"✅ Static site built in '{output_dir}' directory")
    print(f"📁 Files: index.html, index-pt.html, static/")

if __name__ == '__main__':
    parser = argparse.ArgumentParser(description='Build static portfolio site')
    parser.add_argument('-o', '--output', default='dist', help='Output directory (default: dist)')
    args = parser.parse_args()
    
    build_static_site(args.output)