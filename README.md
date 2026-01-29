# Portfolio Builder

## Flask Development
```bash
pip install -r requirements.txt
python app.py
```

## Build Static Site
```bash
# Build to 'dist' directory
python build.py

# Build to custom directory
python build.py -o output

# Make executable and run
chmod +x build.py
./build.py
```

## GitHub Pages Deployment
Push to `main` branch to automatically build and deploy to GitHub Pages.

## Output
- `index.html` (English)
- `index-pt.html` (Portuguese)  
- `static/` (CSS, images, JS)