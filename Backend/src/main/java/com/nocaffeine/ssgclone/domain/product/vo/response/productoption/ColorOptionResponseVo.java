package com.nocaffeine.ssgclone.domain.product.vo.response.productoption;

import com.nocaffeine.ssgclone.domain.product.dto.response.productoption.ColorOptionResponseDto;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.ArrayList;
import java.util.List;

@Getter
@NoArgsConstructor
public class ColorOptionResponseVo {
    
    private Long id;
    private String color;

    public ColorOptionResponseVo(Long id, String color) {
        this.id = id;
        this.color = color;
    }
    
    public static List<ColorOptionResponseVo> colorOptionDtoToVo(List<ColorOptionResponseDto> getColorOptions) {
        
        List<ColorOptionResponseVo> colorOptionResponseVo = new ArrayList<>();

        for (ColorOptionResponseDto colorOptionResponseDto : getColorOptions) {
            colorOptionResponseVo.add(new ColorOptionResponseVo(
                    colorOptionResponseDto.getId(),
                    colorOptionResponseDto.getColor()
            ));
        }
        
        return colorOptionResponseVo;
    }
}
