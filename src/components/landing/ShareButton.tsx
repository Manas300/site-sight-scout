import { Button } from "@/components/ui/button";
import { Share2, Twitter, Facebook, Link as LinkIcon, MessageCircle, Send, Video } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

interface ShareButtonProps {
  variant?: "default" | "outline" | "ghost";
  size?: "default" | "sm" | "lg";
  showLabel?: boolean;
}

export const ShareButton = ({ variant = "default", size = "default", showLabel = true }: ShareButtonProps) => {
  const { toast } = useToast();
  const shareUrl = window.location.href;
  const shareText = "Join me on BAGR - the first live platform where hip hop producers ACTUALLY WIN! 🔥";

  const handleShare = async (platform: 'twitter' | 'facebook' | 'instagram' | 'tiktok' | 'discord' | 'twitch' | 'snapchat' | 'copy') => {
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
          await navigator.clipboard.writeText(`${shareText}\n\n${shareUrl}`);
          toast({
            title: "Link copied! 🔥",
            description: "Share BAGR with your producer friends",
          });
        } catch (err) {
          toast({
            title: "Couldn't copy",
            description: "Try again or share manually",
            variant: "destructive",
          });
        }
        break;
    }
  };

  return (
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
        
        <DropdownMenuItem onClick={() => handleShare('copy')} className="cursor-pointer gap-3 py-2.5 text-base hover:bg-secondary/10 focus:bg-secondary/10">
          <LinkIcon className="w-5 h-5 text-secondary" />
          <span className="font-medium">Copy Link</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
