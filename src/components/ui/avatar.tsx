type AvatarProps = React.ImgHTMLAttributes<HTMLOrSVGElement>
export default function Avatar({ src, alt }: AvatarProps) {
  return <img src={src} alt={alt} className="w-9 h-9 rounded-full object-cover" />;
}
