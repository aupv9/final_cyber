export default class Phim{

    public MaPhim:number;
    public TenPhim:string;
    public Trailer:string;
    public MoTa:string;
    public NgayKhoiChieu:string;
    public DanhGia:number;
    public HinhAnh:string;
    public MaNhom:string;


    public constructor(maphim,tenphim,trailer,mota,ngaykhoichieu,danhgia,hinhanh,manhom){
        this.MaPhim=maphim;
        this.TenPhim=tenphim;
        this.Trailer=trailer;
        this.MoTa=mota;
        this.NgayKhoiChieu=ngaykhoichieu;
        this.DanhGia=danhgia;
        this.HinhAnh=hinhanh;
        this.MaNhom=manhom;
    }
}