/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import { VoiceRecordingService } from "../voiceRecording.service";
import { VoiceRecordingCreateInput } from "./VoiceRecordingCreateInput";
import { VoiceRecording } from "./VoiceRecording";
import { VoiceRecordingFindManyArgs } from "./VoiceRecordingFindManyArgs";
import { VoiceRecordingWhereUniqueInput } from "./VoiceRecordingWhereUniqueInput";
import { VoiceRecordingUpdateInput } from "./VoiceRecordingUpdateInput";

export class VoiceRecordingControllerBase {
  constructor(protected readonly service: VoiceRecordingService) {}
  @common.Post()
  @swagger.ApiCreatedResponse({ type: VoiceRecording })
  async createVoiceRecording(
    @common.Body() data: VoiceRecordingCreateInput
  ): Promise<VoiceRecording> {
    return await this.service.createVoiceRecording({
      data: {
        ...data,

        user: data.user
          ? {
              connect: data.user,
            }
          : undefined,
      },
      select: {
        audioFile: true,
        createdAt: true,
        id: true,
        transcriptionText: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get()
  @swagger.ApiOkResponse({ type: [VoiceRecording] })
  @ApiNestedQuery(VoiceRecordingFindManyArgs)
  async voiceRecordings(
    @common.Req() request: Request
  ): Promise<VoiceRecording[]> {
    const args = plainToClass(VoiceRecordingFindManyArgs, request.query);
    return this.service.voiceRecordings({
      ...args,
      select: {
        audioFile: true,
        createdAt: true,
        id: true,
        transcriptionText: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
  }

  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: VoiceRecording })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async voiceRecording(
    @common.Param() params: VoiceRecordingWhereUniqueInput
  ): Promise<VoiceRecording | null> {
    const result = await this.service.voiceRecording({
      where: params,
      select: {
        audioFile: true,
        createdAt: true,
        id: true,
        transcriptionText: true,
        updatedAt: true,

        user: {
          select: {
            id: true,
          },
        },
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: VoiceRecording })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async updateVoiceRecording(
    @common.Param() params: VoiceRecordingWhereUniqueInput,
    @common.Body() data: VoiceRecordingUpdateInput
  ): Promise<VoiceRecording | null> {
    try {
      return await this.service.updateVoiceRecording({
        where: params,
        data: {
          ...data,

          user: data.user
            ? {
                connect: data.user,
              }
            : undefined,
        },
        select: {
          audioFile: true,
          createdAt: true,
          id: true,
          transcriptionText: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: VoiceRecording })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  async deleteVoiceRecording(
    @common.Param() params: VoiceRecordingWhereUniqueInput
  ): Promise<VoiceRecording | null> {
    try {
      return await this.service.deleteVoiceRecording({
        where: params,
        select: {
          audioFile: true,
          createdAt: true,
          id: true,
          transcriptionText: true,
          updatedAt: true,

          user: {
            select: {
              id: true,
            },
          },
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}