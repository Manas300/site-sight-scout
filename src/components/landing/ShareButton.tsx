import { Button } from "@/components/ui/button";
import { Share2, Twitter, Facebook, Link as LinkIcon, MessageCircle, Send, Video, QrCode } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useState, useEffect } from "react";
import QRCodeLib from 'qrcode';

interface ShareButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  showLabel?: boolean;
}

export const ShareButton = ({ variant = "default", size = "default", showLabel = true }: ShareButtonProps) => {
  const { toast } = useToast();
  const [isQrOpen, setIsQrOpen] = useState(false);
  const [qrCodeDataUrl, setQrCodeDataUrl] = useState<string>('');
  const shareUrl = 'https://bagr.life';
  const shareText = "Join me on <span className='bagr-text'>BAGЯ</span> - the first live platform where hip hop producers ACTUALLY WIN! 🔥";

  // Generate QR code when component mounts
  useEffect(() => {
    const generateQRCode = async () => {
      try {
        const qrDataUrl = await QRCodeLib.toDataURL(shareUrl, {
          width: 200,
          margin: 2,
          color: {
            dark: '#000000',
            light: '#FFFFFF'
          }
        });
        setQrCodeDataUrl(qrDataUrl);
      } catch (error) {
        console.error('Error generating QR code:', error);
      }
    };

    generateQRCode();
  }, [shareUrl]);

  const handleShare = async (platform: 'twitter' | 'facebook' | 'instagram' | 'tiktok' | 'discord' | 'twitch' | 'snapchat' | 'copy' | 'qr') => {
    const encodedUrl = encodeURIComponent(shareUrl);
    const encodedText = encodeURIComponent(shareText);
    
    switch (platform) {
      case 'twitter':
        window.open(
          `https://twitter.com/intent/tweet?text=${encodedText}&url=${encodedUrl}`,
          '_blank',
          'width=600,height=400'
        );
        break;
      
      case 'facebook':
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
          '_blank',
          'width=600,height=400'
        );
        break;
      
      case 'instagram':
        // Instagram doesn't have direct URL sharing, copy link instead
        try {
          await navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
          toast({
            title: "Link copied! 📸",
            description: "Paste in your Instagram story or bio",
          });
        } catch (err) {
          toast({
            title: "Couldn't copy",
            description: "Try again",
            variant: "destructive",
          });
        }
        break;
      
      case 'tiktok':
        // TikTok doesn't have direct URL sharing, copy link instead
        try {
          await navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
          toast({
            title: "Link copied! 🎵",
            description: "Paste in your TikTok bio or comments",
          });
        } catch (err) {
          toast({
            title: "Couldn't copy",
            description: "Try again",
            variant: "destructive",
          });
        }
        break;
      
      case 'discord':
        // Discord doesn't have web sharing, copy formatted message
        try {
          await navigator.clipboard.writeText(`${shareText}\n${shareUrl}`);
          toast({
            title: "Link copied! 💬",
            description: "Paste in your Discord server",
          });
        } catch (err) {
          toast({
            title: "Couldn't copy",
            description: "Try again",
            variant: "destructive",
          });
        }
        break;
      
      case 'twitch':
        // Twitch doesn't have web sharing, copy link
        try {
          await navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
          toast({
            title: "Link copied! 🎮",
            description: "Paste in your Twitch chat or description",
          });
        } catch (err) {
          toast({
            title: "Couldn't copy",
            description: "Try again",
            variant: "destructive",
          });
        }
        break;
      
      case 'snapchat':
        // Snapchat web sharing
        window.open(
          `https://www.snapchat.com/scan?attachmentUrl=${encodedUrl}`,
          '_blank',
          'width=600,height=400'
        );
        break;
      
      case 'copy':
        try {
          await navigator.clipboard.writeText(`${shareText.replace(/<[^>]*>/g, '')}\n\n${shareUrl}`);
          toast({
            title: "Link copied! 🔥",
            description: "Share BAGЯ with your producer friends",
          });
        } catch (err) {
          toast({
            title: "Couldn't copy",
            description: "Try again or share manually",
            variant: "destructive",
          });
        }
        break;
      
      case 'qr':
        setIsQrOpen(true);
        break;
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant={variant} size={size} className="gap-2 touch-manipulation">
            <Share2 className="w-4 h-4 sm:w-5 sm:h-5" />
            {showLabel && <span className="hidden sm:inline">Share</span>}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56 bg-card border-2 border-primary/20 z-[100] backdrop-blur-xl">
          <DropdownMenuItem onClick={() => handleShare('twitter')} className="cursor-pointer gap-3 py-2.5 text-base hover:bg-primary/10 focus:bg-primary/10">
            <Twitter className="w-5 h-5 text-[#1DA1F2]" />
            <span className="font-medium">Twitter</span>
          </DropdownMenuItem>
          
          <DropdownMenuItem onClick={() => handleShare('tiktok')} className="cursor-pointer gap-3 py-2.5 text-base hover:bg-primary/10 focus:bg-primary/10">
            <Video className="w-5 h-5" />
            <span className="font-medium">TikTok</span>
          </DropdownMenuItem>
          
          <DropdownMenuItem onClick={() => handleShare('instagram')} className="cursor-pointer gap-3 py-2.5 text-base hover:bg-primary/10 focus:bg-primary/10">
            <div className="w-5 h-5 flex items-center justify-center text-lg">📸</div>
            <span className="font-medium">Instagram</span>
          </DropdownMenuItem>
          
          <DropdownMenuItem onClick={() => handleShare('discord')} className="cursor-pointer gap-3 py-2.5 text-base hover:bg-primary/10 focus:bg-primary/10">
            <MessageCircle className="w-5 h-5 text-[#5865F2]" />
            <span className="font-medium">Discord</span>
          </DropdownMenuItem>
          
          <DropdownMenuItem onClick={() => handleShare('twitch')} className="cursor-pointer gap-3 py-2.5 text-base hover:bg-primary/10 focus:bg-primary/10">
            <Video className="w-5 h-5 text-[#9146FF]" />
            <span className="font-medium">Twitch</span>
          </DropdownMenuItem>
          
          <DropdownMenuItem onClick={() => handleShare('snapchat')} className="cursor-pointer gap-3 py-2.5 text-base hover:bg-primary/10 focus:bg-primary/10">
            <Send className="w-5 h-5 text-[#FFFC00]" />
            <span className="font-medium">Snapchat</span>
          </DropdownMenuItem>
          
          <DropdownMenuItem onClick={() => handleShare('facebook')} className="cursor-pointer gap-3 py-2.5 text-base hover:bg-primary/10 focus:bg-primary/10">
            <Facebook className="w-5 h-5 text-[#1877F2]" />
            <span className="font-medium">Facebook</span>
          </DropdownMenuItem>
          
          <DropdownMenuSeparator className="bg-border" />
          
          <DropdownMenuItem onClick={() => handleShare('qr')} className="cursor-pointer gap-3 py-2.5 text-base hover:bg-primary/10 focus:bg-primary/10">
            <QrCode className="w-5 h-5 text-primary" />
            <span className="font-medium">QR Code</span>
          </DropdownMenuItem>
          
          <DropdownMenuItem onClick={() => handleShare('copy')} className="cursor-pointer gap-3 py-2.5 text-base hover:bg-secondary/10 focus:bg-secondary/10">
            <LinkIcon className="w-5 h-5 text-secondary" />
            <span className="font-medium">Copy Link</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      
      {/* QR Code Dialog */}
      <Dialog open={isQrOpen} onOpenChange={setIsQrOpen}>
        <DialogContent className="sm:max-w-md bg-card border-2 border-primary/20 [&>button]:absolute [&>button]:right-4 [&>button]:top-4 [&>button]:flex [&>button]:items-center [&>button]:justify-center [&>button]:w-8 [&>button]:h-8 [&>button]:rounded-full [&>button]:bg-background/80 [&>button]:border [&>button]:border-primary/20 [&>button]:hover:bg-primary/10 [&>button]:transition-all [&>button]:duration-200 [&>button]:text-center">
          <DialogHeader>
            <DialogTitle className="text-center text-xl font-black">
              Share <span className="bagr-text">BAGЯ</span> with QR Code
            </DialogTitle>
            <DialogDescription className="text-center text-muted-foreground">
              Let friends scan this to join the movement
            </DialogDescription>
          </DialogHeader>
          <div className="flex flex-col items-center space-y-4 py-4">
            {/* QR Code */}
            <div className="bg-white p-4 rounded-lg border-2 border-primary/20">
              {qrCodeDataUrl ? (
                <img 
                  src={qrCodeDataUrl} 
                  alt="QR Code for BAGЯ" 
                  className="w-48 h-48 rounded"
                />
              ) : (
                <div className="w-48 h-48 bg-gray-100 rounded flex items-center justify-center">
                  <div className="text-center text-gray-500">
                    <QrCode className="w-16 h-16 mx-auto mb-2" />
                    <p className="text-sm">Generating QR Code...</p>
                  </div>
                </div>
              )}
            </div>
            <p className="text-sm text-muted-foreground text-center">
              Scan with any camera app to visit <span className="bagr-text">BAGЯ</span>
            </p>
            <p className="text-xs text-muted-foreground text-center break-all">
              {shareUrl}
            </p>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};
