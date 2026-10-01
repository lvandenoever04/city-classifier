import torch.nn as nn
from torchvision.models import resnet18, ResNet18_Weights

MEAN = 0.45 
STD = 0.225

class Normalize(nn.Module):
    """Rescale pixels to the range the pretrained network was trained on."""
    def forward(self, x):
        return (x - MEAN) / STD

def build_model(n_classes, pretrained=True):
    weights = ResNet18_Weights.DEFAULT if pretrained else None
    net = resnet18(weights=weights)

    rgb = net.conv1.weight.data
    net.conv1 = nn.Conv2d(1, 64, kernel_size=7, stride=2, padding=3, bias=False)
    net.conv1.weight.data = rgb.sum(dim=1, keepdim=True)
    net.fc = nn.Linear(net.fc.in_features, n_classes)
    return nn.Sequential(Normalize(), net)