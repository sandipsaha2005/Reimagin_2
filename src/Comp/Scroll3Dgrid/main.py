from PIL import Image
import os

def decrease_image_quality(input_folder, output_folder, quality=50):
    if not os.path.exists(output_folder):
        os.makedirs(output_folder)
    
    for filename in os.listdir(input_folder):
        if filename.lower().endswith(('.png', '.jpg', '.jpeg')):
            input_path = os.path.join(input_folder, filename)
            output_path = os.path.join(output_folder, filename)
            
            with Image.open(input_path) as img:
                img.save(output_path, quality=quality)

    print(f"All images in {input_folder} have been processed and saved to {output_folder} with {quality}% quality.")

input_folder = 'C:/Users/halde/OneDrive/Desktop/Hackathon/Reimagin_2/src/Comp/Scroll3Dgrid/img1'
output_folder = 'C:/Users/halde/OneDrive/Desktop/Hackathon/Reimagin_2/src/Comp/output'
decrease_image_quality(input_folder, output_folder, quality=50)