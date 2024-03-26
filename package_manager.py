from zipfile import ZipFile

def zip_package(name: str, paths_to_be_zipped: list):
    
    with ZipFile(name + '.zip', 'w') as zipper:
        for filename in paths_to_be_zipped:
            zipper.write(filename)


def zip_project(root):
    files = [
        # root
        'manifest.json', 'styles.css', 'trainer.html', 'trainer.js',

        # images
        'images/Base Trainer 16x16.png',
        'images/Base Trainer 32x32.png',
        'images/Base Trainer 48x48.png',
        'images/Base Trainer 128x128.png'
    ]

    files = [x for x in files]

    zip_package('base_trainer1-0-1', files)


if __name__ == '__main__':
    zip_project(root='base_trainer')